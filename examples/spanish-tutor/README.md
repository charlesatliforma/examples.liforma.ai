# Spanish Tutor

Lesson-based language learning app with a Liforma animated AI tutor.

## Implementations

| Framework | Path | Local URL |
| --- | --- | --- |
| SvelteKit | `sveltekit/` | http://localhost:3007 |
| Vanilla HTML | `vanilla/` | http://localhost:3008 |

## Pattern

```text
The app chooses a lesson, and the lesson chooses the Liforma Experience.
```

Phase 1 lessons each use a dedicated Liforma Experience ID (café, hotel, directions, shopping). The data model matches how you'd store per-lesson IDs from a CMS or API.

## Files

- `spec.md` — full spec for AI builders
- `implementation-notes.md` — maintainer notes
- `sveltekit/` — primary reference implementation
- `vanilla/` — minimal web component copy-paste example

## Try the app

- **Live demo:** https://spanish-tutor.examples.liforma.ai/
- **Run locally:** see `sveltekit/` or `vanilla/`

## Avatar on Meet

The hosted [Meet page](https://www.liforma.ai/meet/demo-spanish-cafe) runs the same underlying avatar experience **without** the Spanish Tutor lesson UI — useful for comparing embed-only vs full app.

## Docs

- https://docs.liforma.ai/getting-started/quick-start
- https://docs.liforma.ai/sdk-reference/web-component
