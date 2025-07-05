import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/React-Portfolio/",
  plugins: [react()],
  build: {
    outDir: "dist",
    // ... other build options like rollupOptions if you need them
  },
});
