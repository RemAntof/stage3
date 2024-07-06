import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

const root = process.cwd();

export default defineConfig({
  base: "/",
  root,
  plugins: [react(), tsconfigPaths()],
});
