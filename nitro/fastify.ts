import fastify from 'fastify'
import type { IncomingMessage as NodeIncomingMessage, ServerResponse as NodeServerResponse } from 'node:http'
import { fromNodeMiddleware } from 'h3'

const app = fastify({ logger: true })

app.get('/', () => {
  return {
    text: 'hello from fastify nitro plugin'
  }
})

app.get('/:name', (req) => {
  return `hello from fastify ${req.params.name}`
})

export default defineNitroPlugin(async (nitro) => {
  await app.ready();

  const handler = (req: NodeIncomingMessage, reply: NodeServerResponse) => {
    app.server.emit('request', req, reply)
  }

  nitro.h3App.stack.unshift({
    route: '/api/fastify',
    handler: fromNodeMiddleware(handler)
  })
})
