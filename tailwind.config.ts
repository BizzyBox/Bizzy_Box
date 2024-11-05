import aspectRatio from '@tailwindcss/aspect-ratio';
import typography from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';
import colors from 'tailwindcss/colors';
import svelteUx from 'svelte-ux/plugins/tailwind.cjs';

export default {
  content: [
    './src/**/*.{html,js,svelte,ts}',
    './node_modules/svelte-ux/**/*.{svelte,js}'  // Add this line for svelte-ux
  ],

  theme: {
    extend: {}
  },

  // Add the ux configuration
  ux: {
    themes: {
      light: {
        primary: colors.orange[500],
        'primary-content': 'white',
        secondary: colors.blue[500],
        'surface-100': 'white',
        'surface-200': colors.gray[100],
        'surface-300': colors.gray[300],
        'surface-content': colors.gray[900],
        'color-scheme': 'light'
      },
      dark: {
        primary: colors.orange[500],
        'primary-content': 'white',
        secondary: colors.blue[500],
        'surface-100': colors.zinc[800],
        'surface-200': colors.zinc[900],
        'surface-300': colors.zinc[950],
        'surface-content': colors.zinc[100],
        'color-scheme': 'dark'
      },
    },
  },

  plugins: [
    typography, 
    aspectRatio,
    svelteUx  // Add the svelte-ux plugin
  ]
} satisfies Config;