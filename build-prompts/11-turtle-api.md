# 11 — turtle.html Storage API + MCP

## Task
Add storage API and MCP client to turtle.html.

## Storage API
```js
turtle.api.storage.get('R3:journal')     // localStorage, ring-prefixed
turtle.api.storage.set('R2:breathCount', 42)
turtle.api.storage.export()              // download as JSON
turtle.api.storage.import(jsonFile)      // load from JSON
```

## MCP Client
```js
turtle.mcp.ask({
  ring: 'R3',
  context: 'User observation text',
  // System prompt loaded from /rings/r3-heart/system.md
})
```

- Endpoint: `https://api.anthropic.com/v1/messages`
- Model: claude-sonnet-4-20250514
- API key stored in localStorage (user provides)
- System prompts per ring from `system.md` files

## Done When
Pages can persist user data per ring and call Claude with ring context.
