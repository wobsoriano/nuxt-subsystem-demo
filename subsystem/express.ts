import express from 'express'

const app = express()

app.get('/', (req, res) => {
  res.json({
    text: 'hello from express'
  })
})

app.get('/:name', (req, res) => {
  res.send(`hello from express, ${req.params.name}`)
})

export default fromNodeMiddleware(app)
