import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	server: {
		port: 3007,
		strictPort: true
	},
	preview: {
		port: 3007,
		strictPort: true
	}
});
