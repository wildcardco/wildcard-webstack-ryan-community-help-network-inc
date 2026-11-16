import { defineConfig } from 'astro/config';
import vue from '@astrojs/vue';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  trailingSlash: 'always',
  integrations: [vue()],
  vite: { plugins: [tailwindcss()] },
});
