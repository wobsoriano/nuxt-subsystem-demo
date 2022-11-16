// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  nitro: {
    plugins: ['~/nitro/express', '~/nitro/h3', '~/nitro/fastify']
  },
})
