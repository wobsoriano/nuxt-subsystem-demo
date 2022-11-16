export default eventHandler((event) => {
  console.log(event.context.user)
  
  return { text: 'hello from nuxt folder /api/hello.ts' }
})
