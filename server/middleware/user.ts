export default eventHandler((event) => {
  event.context.user = {
    id: 69,
    username: 'john_cena',
    email: 'john_cena@nuxt.com'
  }
})

declare module 'h3' {
  interface H3EventContext {
    user: Record<string, any>
  }
}
