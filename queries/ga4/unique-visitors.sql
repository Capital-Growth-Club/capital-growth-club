-- Unique visitors and page views to /agents in the date range.

SELECT
  COUNT(DISTINCT user_pseudo_id) AS unique_visitors,
  COUNT(*) AS page_views
FROM `{{PROJECT_ID}}.analytics_{{PROPERTY_ID}}.events_*`
WHERE _TABLE_SUFFIX BETWEEN '{{START_DATE}}' AND '{{END_DATE}}'
  AND event_name = 'page_view'
  AND (SELECT value.string_value FROM UNNEST(event_params) WHERE key = 'page_location') LIKE '%/agents%'
