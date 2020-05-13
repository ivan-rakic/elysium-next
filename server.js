const express = require('express')
const next = require('next')

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  const server = express()

  server.get('/contact', (req, res) => {
    return app.render(req, res, '/contact', req.query)
  })

  server.get('/gallery', (req, res) => {
    return app.render(req, res, '/gallery', req.query)
  })

  server.get('/news', (req, res) => {
    return app.render(req, res, '/news', req.query)
  })

  server.get('/tickets', (req, res) => {
    return app.render(req, res, '/tickets', req.query)
  })

  server.get('/guide', (req, res) => {
    return app.render(req, res, '/guide', req.query)
  })

  server.get('/about', (req, res) => {
    return app.render(req, res, '/about', req.query)
  })

  server.get('/faq', (req, res) => {
    return app.render(req, res, '/faq', req.query)
  })

  server.get('/how-to', (req, res) => {
    return app.render(req, res, '/how-to', req.query)
  })

  server.get('/participate', (req, res) => {
    return app.render(req, res, '/participate', req.query)
  })

  server.get('/program', (req, res) => {
    return app.render(req, res, '/program', req.query)
  })

  server.get('/program/cinema-and-theater', (req, res) => {
    return app.render(req, res, '/cinema-and-theater', req.query)
  })

  server.get('/program/temple', (req, res) => {
    return app.render(req, res, '/temple', req.query)
  })

  server.get('/program/larva', (req, res) => {
    return app.render(req, res, '/larva', req.query)
  })

  server.get('/program/workshops', (req, res) => {
    return app.render(req, res, '/workshops', req.query)
  })

  server.all('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(port, err => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})
