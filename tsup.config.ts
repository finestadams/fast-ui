import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts src/components/**/*.{ts,tsx}'], // Entry points for all components
  format: ['esm', 'cjs'], // Ensure both ESM and CJS formats
  outDir: 'dist/components', // Output directory
  dts: true, // Generate TypeScript declaration files
  splitting: false, // Disable code splitting
  sourcemap: true, // Generate sourcemaps for debugging
  clean: true, // Clean dist folder before building
});
