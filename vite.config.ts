import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      injectRegister: "script",
      strategies: "generateSW",
      filename: "sw.js",
      srcDir: "src",
      registerType: "autoUpdate",
      workbox: {
        globPatterns: ["**/*.{js,css,html,ico,png,jpeg,jpg,svg}"],
      },
      manifest: {
        name: "Muse",
        id: "/?source=pwa",
        start_url: "/?source=pwa",
        display: "standalone",
        theme_color: "#000000",
        background_color: "#FFFFFF",
        description:
          "A minimalist App that will serve as a portal for trustworthy, all-inclusive, accurate information. And also gives users a chance to contextualize, and filter the noise.",
        scope: "/",
        android_package_name: "com.byteestudio.muse",
        orientation: "portrait",
        prefer_related_applications: true,
        screenshots: [
          {
            src: "mobile.jpeg",
            type: "image/jpeg",
            sizes: "723x1600",
            ///@ts-ignore
            form_factor: "narrow",
          },
          {
            src: "/desktop.png",
            type: "image/png",
            sizes: "1546x979",
            //@ts-ignore
            form_factor: "wide",
          },
        ],
        icons: [
          {
            src: "maskable_icon_x512.png",
            purpose: "maskable",
            sizes: "512x512",
          },
          {
            src: "maskable_icon_x384.png",
            purpose: "maskable",
            sizes: "384x384",
          },
          {
            src: "maskable_icon_x192.png",
            purpose: "maskable",
            sizes: "192x192",
          },
          {
            src: "maskable_icon_x128.png",
            purpose: "any",
            sizes: "128x128",
          },
          {
            src: "maskable_icon_x144.png",
            purpose: "any",
            sizes: "144x144",
          },
          {
            src: "maskable_icon_x96.png",
            purpose: "maskable",
            sizes: "96x96",
          },
          {
            src: "maskable_icon_x72.png",
            purpose: "maskable",
            sizes: "72x72",
          },
          {
            src: "maskable_icon_x48.png",
            purpose: "maskable",
            sizes: "48x48",
          },
        ],
      },
    }),
  ],
});
