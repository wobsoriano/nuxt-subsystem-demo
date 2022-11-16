import express from 'express'

const app = express()

app.get('/', (req, res) => {
  res.send('hello from express')
})

app.get('/:name', (req, res) => {
  res.send(`hello from express, ${req.params.name}`)
})

export default defineNitroPlugin((nitro) => {
  nitro.h3App.stack.unshift({
    route: '/api/express',
    handler: fromNodeMiddleware(app) as any
  })
})
