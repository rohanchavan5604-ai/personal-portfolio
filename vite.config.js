import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// base './' keeps asset paths relative, so the build works on Vercel,
// GitHub Pages (repo sub-path) or any static host.
export default defineConfig({ plugins: [react()], base: './' });
