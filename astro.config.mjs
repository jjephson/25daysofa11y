import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://25daysofa11y.com',
  output: 'static',
  base: '/',
  trailingSlash: 'never'
});
