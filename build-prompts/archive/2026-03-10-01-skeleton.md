# 01 — Directory Skeleton

## Task
Create the full JEDI directory tree. Every dir gets its own `index.html` stub.

## Directories
```
jedi/
├── rings/{r0-survival,r1-sense,r2-gate,r3-heart,r4-voice,r5-identity,r6-observer,r7-network}
├── iris/{trainer,chakra,gifs}
├── lightbringer/
├── research/{dark-side,k-gate/{spray,vagal},sad,neglect-loop,quasar,light-to-light,eye-rings,morning-star}
├── songs/
├── profiles/{thomas,simon,template}
├── tools/{breath,dimensions,triple-threat,word-drip}
├── docs/
├── tags/
└── build-prompts/{archive}
```

## Rules
- Each dir = standalone app
- Each `index.html` = minimal stub linking `style.css` + `turtle.html`
- `data-ring` attr set where applicable
- `data-module` attr = directory name

## Done When
All directories exist with stub `index.html` files.
