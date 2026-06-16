# Spanish Tutor — SvelteKit

## Run

```bash
npm install
npm run dev
```

http://localhost:3007

## Verify

```bash
npm run verify
```

## Customise

- `src/lib/lessons.ts` — lesson content and per-lesson `experienceId` values
- `src/routes/+page.svelte` — main lesson UI
- `src/lib/components/LiformaEmbed.svelte` — SDK + web component

No `.env` file is required for Phase 1. Experience IDs live on each lesson record (the same shape you'd use from a database or CMS).
