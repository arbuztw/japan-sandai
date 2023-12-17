// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["@/assets/css/main.css"],
  app: {
    baseURL: process.env.NUXT_BASE_URL || "",
  },
});
