# 10 — turtle.html MQTT Bridge

## Task
Add MQTT bridge to turtle.html for R7 network features.

## Broker
`wss://broker.hivemq.com:8884/mqtt`

## Topics
- `jedi/r7/breath` — shared 4:6 breathing sync
- `jedi/r7/gaze` — eye-gazing timer sync
- `jedi/r7/presence` — who is online
- `jedi/songs/collab` — collaborative editing
- `jedi/profiles/share` — publish ring profiles

## API
```js
turtle.mqtt.connect(brokerUrl)
turtle.mqtt.subscribe(topic, callback)
turtle.mqtt.publish(topic, payload)
turtle.mqtt.disconnect()
```

## Requirements
- Use MQTT.js from CDN (no npm)
- Auto-reconnect on disconnect
- Presence heartbeat every 30s
- JSON payloads only

## Done When
Two browser tabs can sync breath timer via MQTT.
