// vite.config.ts
import Pages from "file:///E:/GHTools/sticker/small-sticker/node_modules/.pnpm/vite-plugin-pages@0.31.0_vite@4.5.0_@types+node@20.9.0_terser@5.24.0_/node_modules/vite-plugin-pages/dist/index.mjs";
import UnoCSS from "file:///E:/GHTools/sticker/small-sticker/node_modules/.pnpm/unocss@0.57.3_postcss@8.4.31_rollup@2.79.1_vite@4.5.0_@types+node@20.9.0_terser@5.24.0_/node_modules/unocss/dist/vite.mjs";
import { defineConfig } from "file:///E:/GHTools/sticker/small-sticker/node_modules/.pnpm/vite@4.5.0_@types+node@20.9.0_terser@5.24.0/node_modules/vite/dist/node/index.js";
import react from "file:///E:/GHTools/sticker/small-sticker/node_modules/.pnpm/@vitejs+plugin-react-swc@3.4.1_vite@4.5.0_@types+node@20.9.0_terser@5.24.0_/node_modules/@vitejs/plugin-react-swc/index.mjs";
import path from "node:path";
var __vite_injected_original_dirname = "E:\\GHTools\\sticker\\small-sticker";
var vite_config_default = defineConfig({
  plugins: [
    Pages(),
    react(),
    UnoCSS()
    // VitePWA({
    //   registerType: 'autoUpdate',
    //   includeAssets: ['sticker_logo.svg'],
    //   manifest: {
    //     name: '大贴纸',
    //     short_name: '大贴纸',
    //     theme_color: '#ffffff',
    //     icons: [
    //       {
    //         src: 'pwa-192x192.png',
    //         sizes: '192x192',
    //         type: 'image/png',
    //       },
    //       {
    //         src: '/pwa-512x512.png',
    //         sizes: '512x512',
    //         type: 'image/png',
    //       },
    //       {
    //         src: 'pwa-512x512.png',
    //         sizes: '512x512',
    //         type: 'image/png',
    //         purpose: 'any maskable',
    //       },
    //     ],
    //   },
    //   workbox: {
    //     skipWaiting: true,
    //   },
    // }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__vite_injected_original_dirname, "src")
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJFOlxcXFxHSFRvb2xzXFxcXHN0aWNrZXJcXFxcc21hbGwtc3RpY2tlclwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRTpcXFxcR0hUb29sc1xcXFxzdGlja2VyXFxcXHNtYWxsLXN0aWNrZXJcXFxcdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0U6L0dIVG9vbHMvc3RpY2tlci9zbWFsbC1zdGlja2VyL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IFBhZ2VzIGZyb20gJ3ZpdGUtcGx1Z2luLXBhZ2VzJ1xyXG5pbXBvcnQgVW5vQ1NTIGZyb20gJ3Vub2Nzcy92aXRlJ1xyXG5pbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJ1xyXG5pbXBvcnQgcmVhY3QgZnJvbSAnQHZpdGVqcy9wbHVnaW4tcmVhY3Qtc3djJ1xyXG4vLyBpbXBvcnQgeyBWaXRlUFdBIH0gZnJvbSAndml0ZS1wbHVnaW4tcHdhJ1xyXG5pbXBvcnQgcGF0aCBmcm9tICdub2RlOnBhdGgnO1xyXG5cclxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cclxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcclxuICBwbHVnaW5zOiBbXHJcbiAgICBQYWdlcygpLFxyXG4gICAgcmVhY3QoKSxcclxuICAgIFVub0NTUygpLFxyXG4gICAgLy8gVml0ZVBXQSh7XHJcbiAgICAvLyAgIHJlZ2lzdGVyVHlwZTogJ2F1dG9VcGRhdGUnLFxyXG4gICAgLy8gICBpbmNsdWRlQXNzZXRzOiBbJ3N0aWNrZXJfbG9nby5zdmcnXSxcclxuICAgIC8vICAgbWFuaWZlc3Q6IHtcclxuICAgIC8vICAgICBuYW1lOiAnXHU1OTI3XHU4RDM0XHU3RUI4JyxcclxuICAgIC8vICAgICBzaG9ydF9uYW1lOiAnXHU1OTI3XHU4RDM0XHU3RUI4JyxcclxuICAgIC8vICAgICB0aGVtZV9jb2xvcjogJyNmZmZmZmYnLFxyXG4gICAgLy8gICAgIGljb25zOiBbXHJcbiAgICAvLyAgICAgICB7XHJcbiAgICAvLyAgICAgICAgIHNyYzogJ3B3YS0xOTJ4MTkyLnBuZycsXHJcbiAgICAvLyAgICAgICAgIHNpemVzOiAnMTkyeDE5MicsXHJcbiAgICAvLyAgICAgICAgIHR5cGU6ICdpbWFnZS9wbmcnLFxyXG4gICAgLy8gICAgICAgfSxcclxuICAgIC8vICAgICAgIHtcclxuICAgIC8vICAgICAgICAgc3JjOiAnL3B3YS01MTJ4NTEyLnBuZycsXHJcbiAgICAvLyAgICAgICAgIHNpemVzOiAnNTEyeDUxMicsXHJcbiAgICAvLyAgICAgICAgIHR5cGU6ICdpbWFnZS9wbmcnLFxyXG4gICAgLy8gICAgICAgfSxcclxuICAgIC8vICAgICAgIHtcclxuICAgIC8vICAgICAgICAgc3JjOiAncHdhLTUxMng1MTIucG5nJyxcclxuICAgIC8vICAgICAgICAgc2l6ZXM6ICc1MTJ4NTEyJyxcclxuICAgIC8vICAgICAgICAgdHlwZTogJ2ltYWdlL3BuZycsXHJcbiAgICAvLyAgICAgICAgIHB1cnBvc2U6ICdhbnkgbWFza2FibGUnLFxyXG4gICAgLy8gICAgICAgfSxcclxuICAgIC8vICAgICBdLFxyXG4gICAgLy8gICB9LFxyXG4gICAgLy8gICB3b3JrYm94OiB7XHJcbiAgICAvLyAgICAgc2tpcFdhaXRpbmc6IHRydWUsXHJcbiAgICAvLyAgIH0sXHJcbiAgICAvLyB9KSxcclxuICBdLFxyXG4gIHJlc29sdmU6IHtcclxuICAgIGFsaWFzOiB7XHJcbiAgICAgICdAJzogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJ3NyYycpLFxyXG4gICAgfSxcclxuICB9LFxyXG59KVxyXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQTBSLE9BQU8sV0FBVztBQUM1UyxPQUFPLFlBQVk7QUFDbkIsU0FBUyxvQkFBb0I7QUFDN0IsT0FBTyxXQUFXO0FBRWxCLE9BQU8sVUFBVTtBQUxqQixJQUFNLG1DQUFtQztBQVF6QyxJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTO0FBQUEsSUFDUCxNQUFNO0FBQUEsSUFDTixNQUFNO0FBQUEsSUFDTixPQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUErQlQ7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNQLE9BQU87QUFBQSxNQUNMLEtBQUssS0FBSyxRQUFRLGtDQUFXLEtBQUs7QUFBQSxJQUNwQztBQUFBLEVBQ0Y7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
