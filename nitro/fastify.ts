import fastify from 'fastify'

const app = fastify({ logger: true })

app.get('/', () => {
  return 'hello from fastify'
})

app.get('/:name', (req) => {
  return `hello from fastify ${req.params.name}`
})

export default defineNitroPlugin(async (nitro) => {
  await app.ready();

  const handler = (req, reply) => {
    app.server.emit('request', req, reply)
  }

  nitro.h3App.stack.unshift({
    route: '/api/fastify',
    handler: fromNodeMiddleware(handler)
  })
})
