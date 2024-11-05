import { mdsvex } from 'mdsvex';
import adapter from '@sveltejs/adapter-static';  // Changed from adapter-auto
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: [
    vitePreprocess(),
    mdsvex({
      extensions: ['.svx', '.md']
    })
  ],

  kit: {
    // Switch to static adapter for GitHub Pages
    adapter: adapter({
      pages: 'build',
      assets: 'build',
      fallback: null,
      precompress: false,
      strict: true
    }),
    
    // This will need to be updated when you deploy to GitHub Pages
    // to match your repository name, e.g. '/my-repo'
    paths: {
      base: ''
    }
  },

  extensions: ['.svelte', '.svx', '.md']  // Added .md extension
};

export default config;