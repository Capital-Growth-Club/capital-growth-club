-- The exact seconds where the most viewers bail (top 20).
-- Only counts genuine drop-offs — page unloads and tab hides, not pauses.
-- Use this to find "the moment" to re-film.

WITH watch AS (
  SELECT
    user_pseudo_id,
    (SELECT value.int_value FROM UNNEST(event_params) WHERE key = 'last_position_num') AS stop_second,
    (SELECT value.string_value FROM UNNEST(event_params) WHERE key = 'stopped_reason') AS reason
  FROM `{{PROJECT_ID}}.analytics_{{PROPERTY_ID}}.events_*`
  WHERE _TABLE_SUFFIX BETWEEN '{{START_DATE}}' AND '{{END_DATE}}'
    AND event_name = 'video_watch_end'
)
SELECT
  stop_second,
  COUNT(*) AS event_count,
  COUNT(DISTINCT user_pseudo_id) AS unique_users
FROM watch
WHERE reason IN ('page_unload', 'tab_hidden')
GROUP BY stop_second
ORDER BY event_count DESC
LIMIT 20
