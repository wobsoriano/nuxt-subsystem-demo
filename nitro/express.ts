import express from 'express'

const app = express()

app.get('/', (req, res) => {
  res.json({
    text: 'hello from express nitro plugin'
  })
})

app.get('/:name', (req, res) => {
  res.send(`hello from express, ${req.params.name}`)
})

export default defineNitroPlugin((nitro) => {
  nitro.h3App.stack.unshift({
    route: '/api/express',
    handler: fromNodeMiddleware(app)
  })
})
