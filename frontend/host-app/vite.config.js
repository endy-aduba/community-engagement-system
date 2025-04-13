import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'host',
      remotes: {
        // These must match the remoteEntry.js URLs served by each micro frontend
        auth_app: 'http://localhost:5173/assets/remoteEntry.js',
        community_app: 'http://localhost:5174/assets/remoteEntry.js',
      },
      shared: {
        react: {
          singleton: true,
          requiredVersion: '^18.0.0'
        },
        'react-dom': {
          singleton: true,
          requiredVersion: '^18.0.0'
        },
        'react-router-dom': {
          singleton: true,
          requiredVersion: '^6.0.0'
        }
      }
    })
  ],
  server: {
    port: 5175,
    fs: {
      allow: ['.']
    }
  },
  build: {
    target: 'esnext',
    minify: false,
    cssCodeSplit: false
  }
});
