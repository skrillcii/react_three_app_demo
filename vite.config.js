import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: '/react_three_app_demo/'
  plugins: [react()],
  assetsInclude: ["**/*.glb"],
});
