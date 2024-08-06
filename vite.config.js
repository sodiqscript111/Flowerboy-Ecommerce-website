// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react"; // Assuming you're using React

export default defineConfig({
  plugins: [react()],
  server: {
    host: "0.0.0.0", // Listen on all network interfaces
    port: 3000, // Specify the port if you want a specific one, default is 3000
  },
});
