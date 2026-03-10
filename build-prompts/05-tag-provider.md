# 05 — Tag Provider (SQLite + API)

## Task
Create `/tags/` — a self-queryable SQLite tag database with HTML query UI.

## Architecture
- `tags/provider.js` — In-browser SQLite via sql.js (WASM)
- `tags/index.html` — Query console UI
- `tags/schema.sql` — Table definitions
- `tags/api.js` — REST-like API over the DB

## Schema
```sql
CREATE TABLE directories(path TEXT PK, ring TEXT, module TEXT, title TEXT);
CREATE TABLE tags(id INTEGER PK, dir_path TEXT FK, key TEXT, value TEXT);
CREATE TABLE scripts(id INTEGER PK, dir_path TEXT FK, name TEXT, content TEXT);
```

## Features
- Auto-populates from MANIFEST.json on first load
- Query UI: type SQL, see results as table
- API: `tagProvider.query("SELECT * FROM tags WHERE key='ring'")`
- MCP-compatible: exposed as tool for Claude
- Load/pass scripts: store JS snippets per directory, execute on demand

## Done When
Browser can query directory tags via SQL and execute stored scripts.
