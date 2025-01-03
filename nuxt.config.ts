// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: [
    "@vueuse/nuxt",
    "@nuxtjs/google-fonts",
    "@nuxt/image",
    "@pinia/nuxt",
    "dayjs-nuxt",
    "nuxt-typed-router",
    "nuxt-file-storage",
    "@prisma/nuxt",
  ],
  googleFonts: {
    families: {
      Montserrat: true,
    },
  },
  prisma: {
    autoSetupPrisma: true,
  },
  dayjs: {
    locales: ["en", "ru"],
    defaultLocale: "ru",
    defaultTimeZone: "Europe/Moscow",
    plugins: ["utc", "timezone"],
  },
  css: ["@/assets/sass/global.sass"],
  vite: {
    css: {
      preprocessorOptions: {
        sass: {
          additionalData: `
            @use "@/assets/sass/_vars.sass" as *
            @use "@/assets/sass/mixins.sass" as *
            `,
        },
      },
    },
  },
});
