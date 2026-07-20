-- Full /agents conversion funnel — unique users at each stage.
-- Landed → played video → reached 25/50/75% → completed video → clicked CTA → scheduled a call.

WITH sessions AS (
  SELECT
    user_pseudo_id,
    MAX(IF(event_name = 'page_view' AND
      (SELECT value.string_value FROM UNNEST(event_params) WHERE key = 'page_location') LIKE '%/agents%', 1, 0)) AS visited_agents,
    MAX(IF(event_name = 'video_unmute_play', 1, 0)) AS played_video,
    MAX(IF(event_name = 'video_progress' AND
      (SELECT value.int_value FROM UNNEST(event_params) WHERE key = 'percent_num') >= 25, 1, 0)) AS reached_25pct,
    MAX(IF(event_name = 'video_progress' AND
      (SELECT value.int_value FROM UNNEST(event_params) WHERE key = 'percent_num') >= 50, 1, 0)) AS reached_50pct,
    MAX(IF(event_name = 'video_progress' AND
      (SELECT value.int_value FROM UNNEST(event_params) WHERE key = 'percent_num') >= 75, 1, 0)) AS reached_75pct,
    MAX(IF(event_name = 'video_complete', 1, 0)) AS completed_video,
    MAX(IF(event_name = 'cta_click', 1, 0)) AS clicked_cta,
    MAX(IF(event_name = 'Schedule', 1, 0)) AS scheduled_call
  FROM `{{PROJECT_ID}}.analytics_{{PROPERTY_ID}}.events_*`
  WHERE _TABLE_SUFFIX BETWEEN '{{START_DATE}}' AND '{{END_DATE}}'
  GROUP BY user_pseudo_id
),
counts AS (
  SELECT
    SUM(visited_agents) AS step_1_visited,
    SUM(played_video)   AS step_2_played,
    SUM(reached_25pct)  AS step_3_pct25,
    SUM(reached_50pct)  AS step_4_pct50,
    SUM(reached_75pct)  AS step_5_pct75,
    SUM(completed_video) AS step_6_completed,
    SUM(clicked_cta)    AS step_7_clicked,
    SUM(scheduled_call) AS step_8_scheduled
  FROM sessions
  WHERE visited_agents = 1
)
SELECT
  step_1_visited,
  step_2_played,   ROUND(step_2_played   / NULLIF(step_1_visited, 0) * 100, 1) AS played_pct,
  step_3_pct25,    ROUND(step_3_pct25    / NULLIF(step_1_visited, 0) * 100, 1) AS pct25_pct,
  step_4_pct50,    ROUND(step_4_pct50    / NULLIF(step_1_visited, 0) * 100, 1) AS pct50_pct,
  step_5_pct75,    ROUND(step_5_pct75    / NULLIF(step_1_visited, 0) * 100, 1) AS pct75_pct,
  step_6_completed, ROUND(step_6_completed / NULLIF(step_1_visited, 0) * 100, 1) AS completed_pct,
  step_7_clicked,  ROUND(step_7_clicked  / NULLIF(step_1_visited, 0) * 100, 1) AS clicked_pct,
  step_8_scheduled, ROUND(step_8_scheduled / NULLIF(step_1_visited, 0) * 100, 1) AS scheduled_pct
FROM counts
