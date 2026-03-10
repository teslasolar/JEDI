# 02 — style.css Shared Theme

## Task
Create `/style.css` — the shared design system.

## Design Tokens
```css
--void: #050408;
--cream: #fff8e7;
--r0: #DD2244; --r1: #FF6622; --r2: #FFCC00; --r3: #22CC66;
--r4: #2299DD; --r5: #7744DD; --r6: #BB88FF; --r7: #FFD700;
--font-mono: 'DM Mono', monospace;
--font-serif: 'Instrument Serif', serif;
```

## Requirements
- Dark void background, cream text
- Ring color classes: `.ring-r0` through `.ring-r7`
- Mobile-first, no media queries over 3
- CSS-only animations for ring pulse
- Nav bar styles (ring dots at bottom)
- Progressive: readable without JS

## Done When
All pages inherit consistent dark theme with ring colors.
