/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        'mono': ['JetBrains Mono', 'Monaco', 'Consolas', 'monospace'],
      },
      colors: {
        'code-blue': '#61dafb',
        'code-green': '#98d982',
        'code-purple': '#c792ea',
        'ben-purple': "#6A5ACD",

      }
    },
  },
  plugins: [],
}
