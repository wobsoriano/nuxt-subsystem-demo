import { eventHandler, createRouter } from 'h3'

const router = createRouter()
 .get('/', eventHandler(() => ({ text: 'hello from h3 nitro plugin' })))
 .get('/:name', eventHandler(event => `hello from h3, ${event.context.params.name}`))

export default defineNitroPlugin((nitro) => {
  nitro.h3App.stack.unshift({
    route: '/api/h3',
    handler: router.handler
  })
})
