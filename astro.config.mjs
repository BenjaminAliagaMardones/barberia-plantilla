import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  // Configuración para GitHub Pages
  site: 'https://benjaminaliagamardones.github.io',
  base: '/barberia-plantilla',
  
  integrations: [
    react(),
    tailwind({
      // Permite aplicar estilos base de Tailwind
      applyBaseStyles: true,
    }),
  ],
  // Configuración para mejor DX
  vite: {
    optimizeDeps: {
      exclude: ['astro:content'],
    },
  },
});
