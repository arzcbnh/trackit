import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      app: "/src/App",
      assets: "/src/assets",
      components: "/src/components",
      contexts: "/src/contexts",
      hooks: "/src/hooks",
      pages: "/src/pages",
      utils: "/src/utils",
    },
  },
})
