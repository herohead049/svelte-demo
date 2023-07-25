import { sveltekit } from '@sveltejs/kit/vite';
import { webSocketServer } from './webSocketPluginVite';
import { defineConfig } from 'vitest/config';

export default defineConfig({
	plugins: [sveltekit(), webSocketServer],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	},
	server: {
		host: "0.0.0.0",
		port: 3000
	},
	preview: {
		host: "0.0.0.0",
		port: 3000
	}
});
