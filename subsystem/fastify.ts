import fastify from 'fastify'
import type { IncomingMessage as NodeIncomingMessage, ServerResponse as NodeServerResponse } from 'node:http'
import { fromNodeMiddleware } from 'h3'

const app = fastify({ logger: true })

app.get('/', () => {
  return {
    text: 'hello from fastify'
  }
})

app.get('/:name', (req) => {
  return `hello from fastify ${req.params.name}`
})

export default eventHandler(async (event) => {
  await app.ready();
  app.server.emit('request', event.node.req, event.node.res)
})
