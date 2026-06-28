# Spanish Tutor — SvelteKit

## Run

```bash
npm install
npm run dev
```

http://localhost:3007

**Local avatar embed** also needs these running:

```bash
# From workspace root (liforma/)
cd api.liforma.ai && npm run dev      # :3001
cd player.liforma.ai && npm run dev    # :3002
cd cdn.liforma.ai && npm run dev       # :3010 — serves sdk/v2 locally
```

## Verify

```bash
npm run verify
```

## Customise

- `src/lib/lessons.ts` — lesson content and per-lesson `experienceId` values
- `src/routes/+page.svelte` — main lesson UI
- `src/lib/components/LiformaEmbed.svelte` — SDK + web component

No `.env` file is required for Phase 1. Experience IDs live on each lesson record (the same shape you'd use from a database or CMS).
