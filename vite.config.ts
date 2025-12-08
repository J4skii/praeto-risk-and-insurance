import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(async ({ mode }) => {
    const env = loadEnv(mode, '.', '');
    return {
      // Explicitly define the project root. This ensures Vite looks for its modules
      // and resolves paths relative to the correct directory,
      // which is typically where the vite.config.ts file resides.
      root: path.resolve(__dirname, '.'),
      server: {
        port: 3000,
        host: '0.0.0.0',
        proxy: {
          '/api': {
            target: 'http://localhost:4173/',
            changeOrigin: true,
            secure: false,
          },
        },
      },
      plugins: [react()],
      define: {
        'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
        'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
      },
      resolve: {
        alias: {
          // Changed to path.join for robustness, though path.resolve also works.
          // This change is purely stylistic and not the primary fix for your current error.
          '@': path.join(__dirname, 'src'),
        }
      },
    };
});
