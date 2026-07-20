-- Video watch-time summary: averages + quartiles (25/50/75th percentile of stop position).

WITH watch AS (
  SELECT
    user_pseudo_id,
    (SELECT value.int_value FROM UNNEST(event_params) WHERE key = 'last_position_num') AS last_position_sec,
    (SELECT value.int_value FROM UNNEST(event_params) WHERE key = 'percent_watched_num') AS percent_watched,
    (SELECT value.int_value FROM UNNEST(event_params) WHERE key = 'duration_num') AS duration_sec
  FROM `{{PROJECT_ID}}.analytics_{{PROPERTY_ID}}.events_*`
  WHERE _TABLE_SUFFIX BETWEEN '{{START_DATE}}' AND '{{END_DATE}}'
    AND event_name = 'video_watch_end'
)
SELECT
  COUNT(DISTINCT user_pseudo_id) AS unique_viewers,
  COUNT(*) AS watch_end_events,
  ROUND(AVG(last_position_sec), 1) AS avg_watch_sec,
  ROUND(AVG(percent_watched), 1) AS avg_percent_watched,
  APPROX_QUANTILES(last_position_sec, 4) AS position_quartiles_sec,
  MAX(duration_sec) AS video_duration_sec
FROM watch
