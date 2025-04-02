import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ mode }) => ({
	plugins: [react()],
	server: {
		proxy: {
			"/api": {
				target: mode === "development" ? "http://localhost:5000" : "https://crud-backend-bfdn.onrender.com",
				changeOrigin: true,
				secure: false,
			},
		},
	},
}));
