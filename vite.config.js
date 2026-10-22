import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
export default defineConfig({
    plugins: [react()],
    server: {
        proxy: {
            '/agent-api': {
                target: 'https://agente-profesional-david.agentdavidmartinez.workers.dev',
                changeOrigin: true,
                headers: {
                    Origin: 'https://agente-profesional-david.agentdavidmartinez.workers.dev',
                },
                rewrite: function (path) { return path.replace(/^\/agent-api/, ''); },
            },
        },
    },
});
