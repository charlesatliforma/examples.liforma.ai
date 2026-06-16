# Spanish Tutor — implementation notes

## Structure

- **SvelteKit** (`sveltekit/`) — canonical reference with typed lessons, components, and env example.
- **Vanilla** (`vanilla/`) — same UX with `index.html`, `lessons.js`, `app.js` for copy-paste.

## Integration

Phase 1 uses the CDN web component only — not `@liforma/client` npm (unpublished).

`LiformaEmbed.svelte` loads the SDK script once and mounts `<liforma-experience>`. Vanilla loads the script in `index.html`.

## Session state

- `sessionActive` gates lesson selection.
- Embed is mounted on start, removed on end.
- `close` event on the custom element calls the same end-session path as the End button.

## Lesson data

`experienceId` lives on each lesson so future lessons can point to different Liforma Experiences without restructuring the UI.

## Do not over-engineer

- Transcript panel is placeholder lines; wire SDK `message` events when needed.
- No auth in Phase 1.
- No Tailwind.

## Accessibility

- Lesson buttons use `aria-pressed` when selected.
- Session lock message uses `role="status"`.
- Loading state uses `role="status"`; errors use `role="alert"`.

## Mobile

Single-column layout below 800px. Embed min-height 420px on desktop.
