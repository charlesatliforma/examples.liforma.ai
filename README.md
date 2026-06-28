# examples.liforma.ai

Production-quality Liforma example apps for developers and AI builders.

## Local development

Gallery site (port **3006**):

```bash
npm install
npm run dev
```

Open [http://localhost:3006](http://localhost:3006).

## Runnable examples

### Spanish Tutor (SvelteKit) — port 3007

Requires **api** (:3001), **player** (:3002), and **cdn** preview (:3010) for the v2 SDK:

```bash
cd examples/spanish-tutor/sveltekit
npm install
npm run dev
```

### Spanish Tutor (vanilla) — port 3008

```bash
cd examples/spanish-tutor/vanilla
npx serve . -l 3008
```

## Verification

```bash
npm run verify
cd examples/spanish-tutor/sveltekit && npm run verify
```

## Links

- [Spanish Tutor live demo](https://spanish-tutor.examples.liforma.ai/) (hosted SvelteKit app)
- [Docs](https://docs.liforma.ai/getting-started/quick-start)
- [Example docs](https://examples.liforma.ai/examples/spanish-tutor)
- [Avatar on Meet](https://www.liforma.ai/meet/demo-spanish-cafe) (avatar only, no lesson UI)
- [GitHub](https://github.com/charlesatliforma/examples.liforma.ai)
