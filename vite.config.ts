import { defineConfig, type Plugin } from "vite"
import { reactRouter } from "@react-router/dev/vite"
import tsconfigPaths from "vite-tsconfig-paths"
import sitemap from "vite-plugin-sitemap"
import svgr from "vite-plugin-svgr"

export default defineConfig({
  plugins: [
    reactRouter({
      prerender: true,
      // ssr: false,
    }),
    tsconfigPaths(),
    svgr({
      svgrOptions: {
        // Forward `ref` to the root SVG tag.
        ref: true,
        // Do not prefix `class`/`id` attributes.
        svgo: false,
      },
      // Both `.svg` and `.svg?react` imports are React components
      include: ["**/*.svg", "**/*.svg?react"],
    }),
    sitemap({
      hostname: "https://www.lepsch.com",
      exclude: ["/tarteaucitronjs"],
      outDir: "build/client",
      robots: [
        {
          userAgent: "*",
          disallow: ["/tarteaucitronjs/"],
        },
      ],
      changefreq: "monthly",
      priority: {
        "/": 1.0,
        "/projects": 0.7,
        "/contact": 0.6,
        "/about": 0.5,
      },
    }) as Plugin,
  ],
  css: {
    preprocessorOptions: {
      scss: {
        api: "modern-compiler",
      },
    },
  },
})
