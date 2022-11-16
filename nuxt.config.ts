// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  nitro: {
    preset: 'vercel',
  },
  serverHandlers: [
    {
      route: '/api/express',
      middleware: true,
      handler: '~/subsystem/express.ts'
    },
    {
      route: '/api/h3',
      middleware: true,
      handler: '~/subsystem/h3.ts'
    },
    {
      route: '/api/fastify',
      middleware: true,
      handler: '~/subsystem/fastify.ts'
    }
  ],
})
