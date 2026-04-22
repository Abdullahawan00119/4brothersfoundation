import { defineConfig } from "@lovable.dev/vite-tanstack-config";

process.env.SERVER_PRESET = 'vercel';
process.env.NITRO_PRESET = 'vercel';

export default defineConfig({
  cloudflare: false,
  tanstackStart: {
    server: {
      preset: "vercel",
    },
  },
});
