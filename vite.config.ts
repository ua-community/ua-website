import { cloudflare } from "@cloudflare/vite-plugin";
import { defineConfig } from "vite";

// Next.js builds the site. Vite packages that output for Cloudflare unchanged.
export default defineConfig({
  publicDir: "out",
  plugins: [cloudflare({ types: { generate: false } })],
});
