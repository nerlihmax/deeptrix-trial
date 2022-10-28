import { fileURLToPath } from 'url';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [react()],
    define: {
        __dev__: process.env.NODE_ENV !== 'production',
    },
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url)),
        },
    },
    server: {
        hmr: {
            clientPort: 5000,
            // host: '1b4e-95-191-201-172.eu.ngrok.io',
        },
        port: 5000,
    },
});
