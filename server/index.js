const express = require('express')
const app = express()
const port = 3000
const path = require('path')

app.use(express.static('public'))

// catch-all
app.get('*', (req, res) => { 
  console.log(`Serving GET request on path: ${req.path}`)
  res.send(404, 'This page does not exist! Please try another URL, or go back to home page!')
})
const server = app.listen(port, () => { console.log(`Example app listening on port ${port}!`) })

module.exports = server;