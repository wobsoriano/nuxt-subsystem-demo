import { eventHandler, createRouter } from 'h3'

const router = createRouter()
 .get('/', eventHandler(() => 'hello from h3'))
 .get('/:name', eventHandler(event => `hello from h3, ${event.context.params.name}`))

export default defineNitroPlugin((nitro) => {
  nitro.h3App.stack.unshift({
    route: '/api/h3',
    handler: router.handler as any
  })
})
