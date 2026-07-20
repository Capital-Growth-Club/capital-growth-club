-- Breakdown of why viewers stop watching — grouped by stopped_reason.
-- Shows event count, unique users, avg stop position, avg % watched per reason.

WITH watch AS (
  SELECT
    user_pseudo_id,
    (SELECT value.string_value FROM UNNEST(event_params) WHERE key = 'stopped_reason') AS stopped_reason,
    (SELECT value.int_value FROM UNNEST(event_params) WHERE key = 'last_position_num') AS last_position,
    (SELECT value.int_value FROM UNNEST(event_params) WHERE key = 'percent_watched_num') AS percent_watched
  FROM `{{PROJECT_ID}}.analytics_{{PROPERTY_ID}}.events_*`
  WHERE _TABLE_SUFFIX BETWEEN '{{START_DATE}}' AND '{{END_DATE}}'
    AND event_name = 'video_watch_end'
)
SELECT
  stopped_reason,
  COUNT(*) AS event_count,
  COUNT(DISTINCT user_pseudo_id) AS unique_users,
  ROUND(AVG(last_position), 1) AS avg_last_position_sec,
  ROUND(AVG(percent_watched), 1) AS avg_percent_watched
FROM watch
GROUP BY stopped_reason
ORDER BY event_count DESC
