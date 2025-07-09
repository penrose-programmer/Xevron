import { defineConfig } from 'vite'
import viteReact from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import tsconfigPaths from 'vite-tsconfig-paths'

import { TanStackRouterVite } from '@tanstack/router-plugin/vite'
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    TanStackRouterVite({ autoCodeSplitting: true }),
    viteReact(),
    tailwindcss(),
    tsconfigPaths(),
  ],
  // Vitest config has been moved to vitest.config.ts
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
})
