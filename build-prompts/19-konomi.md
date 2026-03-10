# 19 — Konomi Standards System

## Task
Integrate Konomi industrial standards into the JEDI framework.

## Standards Covered
- ISA-95: Enterprise ↔ Control integration
- ISA-88: Batch process control
- ISA-101: HMI design
- ISA-18.2: Alarm management
- OPC-UA: Communication
- MQTT/Sparkplug: Messaging
- Modbus: Field protocol
- KPIs: Performance metrics

## Integration Points
- Tag provider DB stores standard UDTs
- Crosswalks map between standards
- Ring model parallels: R0=field → R6=enterprise

## Files
- Standards reference pages in `/docs/`
- UDT definitions loadable via tag provider

## Done When
Konomi standards are queryable through tag provider DB.
