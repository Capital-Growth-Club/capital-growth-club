-- Top-level /agents metrics in one row.
-- Unique visitors, play rate, CTA rate, booking rate, avg watch time, avg % watched.

WITH events AS (
  SELECT *
  FROM `{{PROJECT_ID}}.analytics_{{PROPERTY_ID}}.events_*`
  WHERE _TABLE_SUFFIX BETWEEN '{{START_DATE}}' AND '{{END_DATE}}'
),
watch_events AS (
  SELECT
    user_pseudo_id,
    (SELECT value.int_value FROM UNNEST(event_params) WHERE key = 'last_position_num') AS last_position,
    (SELECT value.int_value FROM UNNEST(event_params) WHERE key = 'percent_watched_num') AS percent_watched
  FROM events
  WHERE event_name = 'video_watch_end'
),
stats AS (
  SELECT
    COUNT(DISTINCT IF(event_name = 'page_view' AND
      (SELECT value.string_value FROM UNNEST(event_params) WHERE key = 'page_location') LIKE '%/agents%',
      user_pseudo_id, NULL)) AS unique_visitors,
    COUNT(DISTINCT IF(event_name = 'video_unmute_play' AND
      (SELECT value.string_value FROM UNNEST(event_params) WHERE key = 'page_location') LIKE '%/agents%',
      user_pseudo_id, NULL)) AS unique_players,
    COUNT(DISTINCT IF(event_name = 'cta_click' AND
      (SELECT value.string_value FROM UNNEST(event_params) WHERE key = 'page_location') LIKE '%/agents%',
      user_pseudo_id, NULL)) AS unique_cta_clickers,
    COUNT(DISTINCT IF(event_name = 'Schedule' AND
      (SELECT value.string_value FROM UNNEST(event_params) WHERE key = 'funnel') = 'agents',
      user_pseudo_id, NULL)) AS unique_bookings
  FROM events
),
watch AS (
  SELECT
    ROUND(AVG(last_position), 1) AS avg_watch_sec,
    ROUND(AVG(percent_watched), 1) AS avg_percent_watched
  FROM watch_events
)
SELECT
  stats.unique_visitors,
  stats.unique_players,
  ROUND(stats.unique_players / NULLIF(stats.unique_visitors, 0) * 100, 1) AS play_rate_pct,
  stats.unique_cta_clickers,
  ROUND(stats.unique_cta_clickers / NULLIF(stats.unique_visitors, 0) * 100, 1) AS cta_rate_pct,
  stats.unique_bookings,
  ROUND(stats.unique_bookings / NULLIF(stats.unique_visitors, 0) * 100, 1) AS booking_rate_pct,
  watch.avg_watch_sec,
  watch.avg_percent_watched
FROM stats, watch
