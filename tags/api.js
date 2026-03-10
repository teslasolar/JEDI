// JEDI Tag Provider API
// In-browser SQLite via sql.js — self-queryable directory tag DB

const TAG_DB_NAME = 'jedi-tags';

class TagProvider {
  constructor() {
    this.db = null;
    this.ready = false;
  }

  async init() {
    const SQL = await initSqlJs({
      locateFile: f => `https://sql.js.org/dist/${f}`
    });
    const saved = localStorage.getItem(TAG_DB_NAME);
    if (saved) {
      const buf = Uint8Array.from(atob(saved), c => c.charCodeAt(0));
      this.db = new SQL.Database(buf);
    } else {
      this.db = new SQL.Database();
    }
    await this._initSchema();
    this.ready = true;
    return this;
  }

  async _initSchema() {
    const schema = await fetch('/JEDI/tags/schema.sql')
      .then(r => r.text())
      .catch(() => null);
    if (schema) this.db.run(schema);
  }

  save() {
    const data = this.db.export();
    const b64 = btoa(String.fromCharCode(...data));
    localStorage.setItem(TAG_DB_NAME, b64);
  }

  query(sql, params = []) {
    try {
      const stmt = this.db.prepare(sql);
      if (params.length) stmt.bind(params);
      const results = [];
      while (stmt.step()) results.push(stmt.getAsObject());
      stmt.free();
      return { ok: true, data: results };
    } catch (e) {
      return { ok: false, error: e.message };
    }
  }

  run(sql, params = []) {
    try {
      this.db.run(sql, params);
      this.save();
      return { ok: true, changes: this.db.getRowsModified() };
    } catch (e) {
      return { ok: false, error: e.message };
    }
  }

  // Directory operations
  addDir(path, ring, module, title, parent = null) {
    return this.run(
      'INSERT OR REPLACE INTO directories VALUES (?,?,?,?,?,datetime("now"))',
      [path, ring, module, title, parent]
    );
  }

  // Tag operations
  setTag(dirPath, key, value) {
    return this.run(
      'INSERT OR REPLACE INTO tags (dir_path, key, value) VALUES (?,?,?)',
      [dirPath, key, value]
    );
  }

  getTag(dirPath, key) {
    const r = this.query(
      'SELECT value FROM tags WHERE dir_path=? AND key=?', [dirPath, key]
    );
    return r.ok && r.data.length ? r.data[0].value : null;
  }

  getTags(dirPath) {
    return this.query('SELECT key, value FROM tags WHERE dir_path=?', [dirPath]);
  }

  // Script operations
  addScript(dirPath, name, content, type = 'js') {
    return this.run(
      'INSERT OR REPLACE INTO scripts (dir_path, name, content, type) VALUES (?,?,?,?)',
      [dirPath, name, content, type]
    );
  }

  execScript(dirPath, name) {
    const r = this.query(
      'SELECT content, type FROM scripts WHERE dir_path=? AND name=?',
      [dirPath, name]
    );
    if (!r.ok || !r.data.length) return { ok: false, error: 'Script not found' };
    const script = r.data[0];
    if (script.type === 'js') {
      try {
        const fn = new Function(script.content);
        return { ok: true, result: fn() };
      } catch (e) {
        return { ok: false, error: e.message };
      }
    }
    return { ok: false, error: `Unknown script type: ${script.type}` };
  }

  // MCP-compatible tool interface
  asTool() {
    return {
      name: 'tag_provider',
      description: 'Query JEDI directory tags via SQL',
      input_schema: {
        type: 'object',
        properties: {
          sql: { type: 'string', description: 'SQL query to execute' },
          params: { type: 'array', items: { type: 'string' }, default: [] }
        },
        required: ['sql']
      },
      execute: ({ sql, params }) => this.query(sql, params || [])
    };
  }

  // Seed from MANIFEST.json
  async seedFromManifest(manifestUrl = '/JEDI/MANIFEST.json') {
    try {
      const manifest = await fetch(manifestUrl).then(r => r.json());
      if (manifest.rings) {
        for (const ring of manifest.rings) {
          const path = `/rings/${ring.id.toLowerCase()}-${ring.name.toLowerCase()}/`;
          this.addDir(path, ring.id, ring.name.toLowerCase(), ring.name);
          this.setTag(path, 'prime', String(ring.prime));
          this.setTag(path, 'color', ring.color);
          this.setTag(path, 'hz', String(ring.hz));
          this.setTag(path, 'neuro', ring.neuro || '');
          this.setTag(path, 'chakra', ring.chakra || '');
          this.setTag(path, 'mantra', ring.mantra || '');
        }
      }
      if (manifest.pages) {
        for (const page of manifest.pages) {
          this.addDir(page.path, page.ring || null, page.title, page.title);
        }
      }
      this.save();
      return { ok: true };
    } catch (e) {
      return { ok: false, error: e.message };
    }
  }
}

// Export for module and global use
if (typeof window !== 'undefined') window.TagProvider = TagProvider;
if (typeof module !== 'undefined') module.exports = { TagProvider };
