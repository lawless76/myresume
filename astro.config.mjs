import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  output: 'static',
  // Update this to your custom domain once set up
  // site: 'https://yourdomain.com',
});
