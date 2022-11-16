import { eventHandler, createRouter } from 'h3'

const router = createRouter()
 .get('/', eventHandler((event) => ({ text: 'hello from h3' })))
 .get('/:name', eventHandler(event => `hello from h3, ${event.context.params.name}`))

export default router.handler
