import { defineConfig } from "vitest/config"
import react from "@vitejs/plugin-react-swc"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "build",
    sourcemap: true,
  },
  test: {
    globals: true,
    environment: "jsdom",
    maxThreads: 1,
    minThreads: 1,
    setupFiles: "src/setupTests",
    mockReset: true,
  },
})