import path from "node:path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig(({ mode }) => {
    console.log(`Vite configuration prepared for mode: ${mode}`);
    
    return {
        plugins: [react()],
        root: path.resolve(__dirname, ""),
        build: {
            outDir: path.resolve(__dirname, "build")
        },
        server: {
            port: 3000
        },
        resolve: {
            alias: {
                "@": path.resolve(__dirname, "./src")
            }
        },
        css: {
            devSourcemap: true
        }
    }
});