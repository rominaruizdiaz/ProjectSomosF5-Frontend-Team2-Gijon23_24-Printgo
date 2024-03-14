import { defineConfig } from 'vite';
import Vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [Vue()],
  test: {
    environment: 'jsdom', // Configura Vitest para usar jsdom
  },
});


