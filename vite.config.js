import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
var root = process.cwd();
export default defineConfig({
  base: '/',
  root: root,
  plugins: [react(), tsconfigPaths()],
});
