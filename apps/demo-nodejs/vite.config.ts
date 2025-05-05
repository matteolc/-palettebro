import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [tsconfigPaths()],
  build: {
    target: 'node16',
    outDir: 'dist',
    rollupOptions: {
      input: 'src/index.ts',
      output: {
        entryFileNames: 'index.js',
        format: 'esm',
      },
    },
    lib: {
      entry: 'src/index.ts',
      formats: ['es'],
    },
    minify: false,
  },
}); 