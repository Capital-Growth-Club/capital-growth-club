-- CTA button clicks broken down by location on the page.
-- Tells you which section actually drives applications.

SELECT
  COALESCE(
    NULLIF((SELECT value.string_value FROM UNNEST(event_params) WHERE key = 'location'), ''),
    'unspecified'
  ) AS location,
  COUNT(*) AS click_count,
  COUNT(DISTINCT user_pseudo_id) AS unique_clickers
FROM `{{PROJECT_ID}}.analytics_{{PROPERTY_ID}}.events_*`
WHERE _TABLE_SUFFIX BETWEEN '{{START_DATE}}' AND '{{END_DATE}}'
  AND event_name = 'cta_click'
GROUP BY location
ORDER BY click_count DESC
