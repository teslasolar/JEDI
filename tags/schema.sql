-- JEDI Tag Provider Schema
-- Self-queryable directory tag database

CREATE TABLE IF NOT EXISTS directories (
  path TEXT PRIMARY KEY,
  ring TEXT,
  module TEXT,
  title TEXT,
  parent TEXT,
  created TEXT DEFAULT (datetime('now'))
);

CREATE TABLE IF NOT EXISTS tags (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  dir_path TEXT NOT NULL,
  key TEXT NOT NULL,
  value TEXT,
  FOREIGN KEY (dir_path) REFERENCES directories(path),
  UNIQUE(dir_path, key)
);

CREATE TABLE IF NOT EXISTS scripts (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  dir_path TEXT NOT NULL,
  name TEXT NOT NULL,
  content TEXT NOT NULL,
  type TEXT DEFAULT 'js',
  FOREIGN KEY (dir_path) REFERENCES directories(path),
  UNIQUE(dir_path, name)
);

CREATE INDEX IF NOT EXISTS idx_tags_key ON tags(key);
CREATE INDEX IF NOT EXISTS idx_tags_dir ON tags(dir_path);
CREATE INDEX IF NOT EXISTS idx_scripts_dir ON scripts(dir_path);
