import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://benbytecode.com',
  base: '/',
  outDir: './dist',

  // Vite specific configuration remains here
  vite: {
    plugins: [
      tailwindcss()
    ]
  }
});