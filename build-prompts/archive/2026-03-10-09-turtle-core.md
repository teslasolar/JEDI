# 09 — turtle.html Core

## Task
Build `/turtle.html` — the universal backend module.

## Core Features
1. **MD Runner**: Fetch + parse README.md from same directory
2. **Nav Generator**: Auto-build ring navigation bar
3. **Extension Parser**: Handle custom markdown blocks

## Markdown Extensions
- ` ```run:javascript ` → execute in sandboxed iframe
- ` ```breath:4:6 ` → render breath timer widget
- ` ```ring:R3 ` → render ring visualization
- ` ```cite:CIA-RDP96 ` → link to cia.gov FOIA
- ` [!exercise] ` → interactive exercise card

## Nav System
- Ring dots at bottom (R0-R7) with active indicator
- Breadcrumb from current path
- Sibling links within same section

## API Surface
```js
window.turtle.init({ ring, module })
window.turtle.md.render(markdownString)
window.turtle.nav.build()
```

## Done When
Any page loading turtle.html auto-renders local README.md with nav.
