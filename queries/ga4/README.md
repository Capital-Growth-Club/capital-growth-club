# GA4 Query Runner

Ad-hoc BigQuery queries against the GA4 export, wrapped in a tiny shell runner.

## Setup

1. GA4 → Admin → Product Links → **BigQuery Links** must be linked to project `capitalgrowthclub-analytics`.
2. `gcloud` + `bq` CLIs installed and authenticated (`gcloud auth login`, `gcloud auth application-default login`).
3. Fill in `config.sh` → `PROPERTY_ID` once the first daily export lands. Find it with:

```bash
bq ls
# look for a dataset named analytics_XXXXXXXX — the digits are the PROPERTY_ID
```

## Running a query

```bash
./run.sh <query-name> [days]
```

- `<query-name>` — one of the `.sql` files in this folder (without the extension)
- `[days]` — lookback window in days (defaults to 7)

Examples:

```bash
./run.sh overview             # last 7 days, top-line /agents metrics
./run.sh overview 30          # last 30 days
./run.sh video-dropoff        # breakdown of why viewers stop watching
./run.sh dropoff-seconds      # top 20 seconds where viewers bail
./run.sh retention-funnel 14  # 14-day funnel: landed → played → 25% → 50% → CTA → schedule
./run.sh list                 # show all available queries
```

## Available queries

| Query | Answers |
|---|---|
| `overview` | Unique visitors, play rate, CTA rate, booking rate, avg watch time — all in one row |
| `unique-visitors` | Unique visitors + page views to /agents |
| `video-play-rate` | How many /agents visitors clicked play, and what % that is |
| `video-watch-time` | Avg watch time + quartiles (25/50/75th percentile stop position) |
| `video-dropoff` | Why viewers stopped watching — grouped by paused / ended / tab_hidden / page_unload |
| `dropoff-seconds` | The top 20 exact seconds where viewers bail — for finding re-film targets |
| `cta-clicks` | CTA clicks grouped by location (nav, hero, pricing, final_cta, unspecified) |
| `retention-funnel` | Full conversion funnel — landed → played → 25/50/75/100% → CTA → scheduled |

## Adding your own

1. Drop a new `.sql` file into this folder
2. Reference `` `{{PROJECT_ID}}.analytics_{{PROPERTY_ID}}.events_*` `` for the table
3. Use `_TABLE_SUFFIX BETWEEN '{{START_DATE}}' AND '{{END_DATE}}'` in the WHERE clause
4. `./run.sh your-query-name` — done. It'll auto-substitute the values.

## Data lag

- **Daily events table** (`events_YYYYMMDD`) — arrives ~24hrs after the day ends
- **Streaming table** (`events_intraday_YYYYMMDD`) — near real-time, ~1 minute delay if streaming export is on
- **Historical:** no backfill exists before the BigQuery link was created

## Cost

Free at your traffic volume. BigQuery gives you 1TB of queries/month + 10GB of storage/month at no charge. A landing page generates a few MB/day of events data — you'll never approach the limits.
