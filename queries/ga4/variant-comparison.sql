-- Side-by-side comparison of /agents variants A vs B.
-- Uses the `agents_variant` event parameter that's automatically attached to
-- every custom event via the analytics helper.

WITH events AS (
  SELECT *
  FROM `{{PROJECT_ID}}.analytics_{{PROPERTY_ID}}.events_*`
  WHERE _TABLE_SUFFIX BETWEEN '{{START_DATE}}' AND '{{END_DATE}}'
),
tagged AS (
  SELECT
    (SELECT value.string_value FROM UNNEST(event_params) WHERE key = 'agents_variant') AS variant,
    event_name,
    user_pseudo_id,
    (SELECT value.int_value FROM UNNEST(event_params) WHERE key = 'last_position_num') AS last_position,
    (SELECT value.int_value FROM UNNEST(event_params) WHERE key = 'percent_watched_num') AS percent_watched
  FROM events
  WHERE
    (SELECT value.string_value FROM UNNEST(event_params) WHERE key = 'page_location') LIKE '%/agents%'
    OR event_name IN ('video_watch_end', 'video_progress', 'video_unmute_play',
                      'video_pause', 'video_resume', 'video_seek',
                      'video_speed_change', 'video_fullscreen_toggle',
                      'video_complete', 'cta_click', 'Schedule')
)
SELECT
  variant,
  COUNT(DISTINCT IF(event_name = 'page_view', user_pseudo_id, NULL)) AS unique_visitors,
  COUNT(DISTINCT IF(event_name = 'video_unmute_play', user_pseudo_id, NULL)) AS unique_players,
  ROUND(
    COUNT(DISTINCT IF(event_name = 'video_unmute_play', user_pseudo_id, NULL))
    / NULLIF(COUNT(DISTINCT IF(event_name = 'page_view', user_pseudo_id, NULL)), 0)
    * 100, 1
  ) AS play_rate_pct,
  ROUND(AVG(IF(event_name = 'video_watch_end', last_position, NULL)), 1) AS avg_watch_sec,
  ROUND(AVG(IF(event_name = 'video_watch_end', percent_watched, NULL)), 1) AS avg_percent_watched,
  COUNT(DISTINCT IF(event_name = 'cta_click', user_pseudo_id, NULL)) AS unique_cta_clickers,
  ROUND(
    COUNT(DISTINCT IF(event_name = 'cta_click', user_pseudo_id, NULL))
    / NULLIF(COUNT(DISTINCT IF(event_name = 'page_view', user_pseudo_id, NULL)), 0)
    * 100, 1
  ) AS cta_rate_pct,
  COUNT(DISTINCT IF(event_name = 'Schedule', user_pseudo_id, NULL)) AS unique_bookings,
  ROUND(
    COUNT(DISTINCT IF(event_name = 'Schedule', user_pseudo_id, NULL))
    / NULLIF(COUNT(DISTINCT IF(event_name = 'page_view', user_pseudo_id, NULL)), 0)
    * 100, 1
  ) AS booking_rate_pct
FROM tagged
WHERE variant IS NOT NULL AND variant IN ('a', 'b')
GROUP BY variant
ORDER BY variant
