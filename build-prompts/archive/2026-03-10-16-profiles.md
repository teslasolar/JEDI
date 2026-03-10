# 16 — Profile Builder

## Task
Build `/profiles/` — R0-R7 assessment and profile system.

## profiles/index.html — Builder
- Interactive R0-R7 self-assessment
- Slider per ring (0-10 scale)
- Generates radar chart visualization
- Export as JSON, share via MQTT

## profiles/template/index.html
- Blank template for new users
- Instructions per ring assessment

## profiles/thomas/index.html
- Thomas's ring profile (pre-filled)

## profiles/simon/index.html
- Simon's ring profile (pre-filled)

## Profile Data
```json
{"name":"","rings":{"R0":0,"R1":0,"R2":0,"R3":0,"R4":0,"R5":0,"R6":0,"R7":0},"notes":{}}
```

## Done When
Users can create, view, and export ring profiles.
