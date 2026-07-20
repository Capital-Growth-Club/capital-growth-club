-- How many /agents visitors actually clicked play on the video, and what percent that is.

WITH stats AS (
  SELECT
    COUNT(DISTINCT IF(event_name = 'page_view' AND
      (SELECT value.string_value FROM UNNEST(event_params) WHERE key = 'page_location') LIKE '%/agents%',
      user_pseudo_id, NULL)) AS unique_visitors,
    COUNT(DISTINCT IF(event_name = 'video_unmute_play' AND
      (SELECT value.string_value FROM UNNEST(event_params) WHERE key = 'page_location') LIKE '%/agents%',
      user_pseudo_id, NULL)) AS unique_players
  FROM `{{PROJECT_ID}}.analytics_{{PROPERTY_ID}}.events_*`
  WHERE _TABLE_SUFFIX BETWEEN '{{START_DATE}}' AND '{{END_DATE}}'
)
SELECT
  unique_visitors,
  unique_players,
  ROUND(unique_players / NULLIF(unique_visitors, 0) * 100, 1) AS play_rate_pct
FROM stats
