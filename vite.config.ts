import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    base: "/portfolio-pangalawa/",
    server: {
        proxy: {
            "/api": {
                target: "https://any-anime-api.vercel.app",
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/api/, ""),
            },
        },
    },
});
