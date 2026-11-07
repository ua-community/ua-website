import { defineConfig } from "cf/config";

export default defineConfig({
  accountId: "e531d96572bcfc4edacf957949c536cd",
  worker: {
    name: "ua-website",
    compatibilityDate: "2026-11-07",
    workersDev: true,
    previewUrls: false,
    domains: ["userandagents.org", "www.userandagents.org"],
    assets: {
      notFoundHandling: "404-page",
    },
  },
});
