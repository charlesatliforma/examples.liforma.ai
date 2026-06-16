# Spanish Tutor — Vanilla HTML

Minimal copy-paste example using the Liforma CDN web component.

## Run

```bash
npx serve . -l 3008
```

http://localhost:3008

## Files

- `index.html` — structure + CDN script tag
- `lessons.js` — lesson data
- `app.js` — UI state, close-before-switch, embed mount
- `styles.css` — layout (no build step)

## Customise

Change lessons in `lessons.js`. Each lesson's `experienceId` is passed to `<liforma-experience>` when practice starts.
