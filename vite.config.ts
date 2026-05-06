import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  base: '/baavya-realty/',
  plugins: [react(), tailwindcss()],
  server: {
    port: 3000,
    strictPort: true,
    host: '0.0.0.0',
  },
});