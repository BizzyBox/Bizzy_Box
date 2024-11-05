import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { mdsvex } from 'mdsvex';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter({
      pages: 'build',
      assets: 'build',
      fallback: 'index.html',
      strict: false
    }),
    // Remove or update the base path since we're using a custom domain now
    paths: {
      base: ''  // Changed from '/Bizzy_Box' to ''
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