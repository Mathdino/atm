import { defineConfig } from 'vite';

export default defineConfig({
  server: { port: 5178, open: false },
  build: { target: 'es2020', assetsInlineLimit: 0 },
});
