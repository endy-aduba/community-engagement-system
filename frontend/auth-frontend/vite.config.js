import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'auth_app',
      filename: 'remoteEntry.js',
      exposes: {
        './AuthApp': './src/App.jsx',
      },
      shared: ['react', 'react-dom', 'react-router-dom'],
      // 👇 forces it to work even in dev mode
      dev: true
    }),
  ],
  server: {
    port: 5173,
    fs: {
      allow: ['.'],
    }
  },
  build: {
    target: 'esnext',
    minify: false,
    cssCodeSplit: false,
  }
});
