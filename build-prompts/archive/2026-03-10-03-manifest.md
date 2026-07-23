# 03 — MANIFEST.json Registry

## Task
Create `/MANIFEST.json` — the site-wide content registry.

## Schema
```json
{
  "rings": [{"id":"R0","name":"SURVIVAL","prime":2,"color":"#DD2244","hz":55}],
  "pages": [{"path":"/rings/r0-survival/","title":"R0 Survival","ring":"R0"}],
  "docs": [{"slug":"eye-rings","title":"Seven Rings Behind Your Eyes","path":"/research/eye-rings/"}],
  "songs": [{"slug":"thunderdome","title":"Thunderdome","path":"/songs/thunderdome/"}],
  "profiles": [{"slug":"thomas","name":"Thomas","path":"/profiles/thomas/"}]
}
```

## Requirements
- All 8 rings with prime, color, hz, name, neuro, chakra, mantra
- All page paths for nav generation
- All docs, songs, profiles for dashboard auto-population
- Machine-readable, turtle.html consumes this

## Done When
MANIFEST.json validates and covers all content.
