// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

import tailwindcss from '@tailwindcss/vite';

import sitemap from "@astrojs/sitemap";

import compressor from "astro-compressor";

import starlight from "@astrojs/starlight";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
	integrations: [
		react(),
		mdx()
	],

	vite: {
		// @ts-ignore
		plugins: [tailwindcss()]
	}
});