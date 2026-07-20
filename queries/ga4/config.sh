# GA4 / BigQuery query config
# Sourced by run.sh — do not execute directly

# Google Cloud project that holds the GA4 BigQuery export
PROJECT_ID="capitalgrowthclub-analytics"

# GA4 property ID — the number after `analytics_` in the BigQuery dataset name
# Find it by running: bq ls
# TODO: fill this in once the first daily export lands (tomorrow)
PROPERTY_ID="546132807"

# Default number of days to look back if not specified on the command line
DEFAULT_DAYS=7
