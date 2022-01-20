import react from '@vitejs/plugin-react';
import reactRefresh from '@vitejs/plugin-react-refresh';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import path from 'path';
// * added packages to be able to use FlexForm

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), reactRefresh(), tsconfigPaths()],
  define: {
    'process.env.SERVER': '1',
  },
});
