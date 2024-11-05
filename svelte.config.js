import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { mdsvex } from 'mdsvex';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter({
      pages: 'build',
      assets: 'build',
      fallback: 'index.html',  // Add this for SPA fallback
      strict: false  // Add this to handle all routes
    }),
    paths: {
      base: '/Bizzy_Box'
    }
  },
  preprocess: [
    vitePreprocess(),
    mdsvex({
      extensions: ['.svx', '.md']
    })
  ],
  extensions: ['.svelte', '.svx', '.md']
};

export default config;