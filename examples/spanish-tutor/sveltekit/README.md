# Spanish Tutor — SvelteKit

## Run

```bash
npm install
npm run dev
```

http://localhost:3007

**Local avatar embed** also needs API and player running (v2 SDK loads from production CDN):

```bash
# From workspace root (liforma/)
cd api.liforma.ai && npm run dev      # :3001
cd player.liforma.ai && npm run dev    # :3002
```

Optional: `cd cdn.liforma.ai && npm run dev` (`:3010`) only when testing unpublished SDK changes.

## Verify

```bash
npm run verify
```

## Customise

- `src/lib/lessons.ts` — lesson content and per-lesson `experienceId` values
- `src/routes/+page.svelte` — main lesson UI
- `src/lib/components/LiformaEmbed.svelte` — SDK + web component

No `.env` file is required for Phase 1. Experience IDs live on each lesson record (the same shape you'd use from a database or CMS).
