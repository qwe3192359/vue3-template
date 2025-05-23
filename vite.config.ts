import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    port: 8001,
    host: true,
    open: true,
    proxy: {
      // https://cn.vitejs.dev/config/#server-proxy
      "/websockets": {
        target: "wss://toolin.cn/echo;",
        changeOrigin: true,
        ws: true,
        // rewrite: (p) => p.replace(/^\/dev-api/, ""),
      },
    },
  },
});
