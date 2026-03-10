# 17 — Breath Timer Tool

## Task
Build `/tools/breath/index.html` — 4:6 breathing timer.

## Features
- Visual circle animation: expands on inhale, contracts on exhale
- 4 second inhale, 6 second exhale (configurable)
- Session timer with rep counter
- Vagal tone visualization (HRV proxy)
- Ring color: R2 yellow (#FFCC00) — gate ring
- MQTT sync option (turtle.mqtt for shared breathing)

## UI
- Large breathing circle (CSS animation)
- "IN" / "OUT" text overlay
- Counter: current rep / total session
- Settings: in:out ratio, session length
- Start / Pause / Reset buttons

## Done When
Timer runs 4:6 breath cycle with visual feedback and session tracking.
