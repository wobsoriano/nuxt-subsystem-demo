import fastify from 'fastify'

const app = fastify({ logger: true })

app.get('/', () => {
  return {
    text: 'hello from fastify'
  }
})

app.get('/:name', (req) => {
  return `hello from fastify ${(req.params as any).name}`
})

export default eventHandler(async (event) => {
  await app.ready();
  app.server.emit('request', event.node.req, event.node.res)
})
