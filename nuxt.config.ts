// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss"],
  pages: true,
  tailwindcss: {
    config: {
      content: [
        "./app/components/**/*.vue",
        "./app/layouts/**/*.vue",
        "./app/pages/**/*.vue",
        "./app/app.vue",
      ],
    },
  },
});
