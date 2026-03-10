# 22 — Deploy to GitHub Pages

## Task
Deploy JEDI to `teslasolar.github.io/JEDI/`.

## Steps
1. Verify all paths work with `/JEDI/` base path
2. Add `.nojekyll` file (prevent Jekyll processing)
3. Ensure `index.html` exists at root
4. Push to `main` branch
5. Enable GitHub Pages: Settings → Pages → main → / (root)

## Path Fixes
- All `href` and `src` use relative paths or `/JEDI/` prefix
- MANIFEST.json paths relative to deploy root
- turtle.html loaded with correct base path

## Verification
- [ ] Root page loads
- [ ] Ring navigation works
- [ ] All tools load standalone
- [ ] MQTT connects from deployed URL
- [ ] Tag provider DB initializes

## Done When
Site is live at teslasolar.github.io/JEDI/ with all features working.
