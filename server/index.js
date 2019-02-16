const express = require('express')
const app = express()
const port = 3000
const path = require('path')
const VideoModel = require('../db/VideoModel');
const db = require('../db/index.js');

app.use(express.static('public'))

app.get('/video-player-service/api/get-video', (req, res) => {
  console.log(`Serving GET request on path: ${req.path}`)
  VideoModel.findOne({ videoYouTubeId: req.query.videoId }, function (err, video) { 
    if (err) {
      console.log(err)
    }
    res.send(video)
  });
})

// catch-all
app.get('*', (req, res) => {
  console.log(`Serving GET request on path: ${req.path}`)
  res.send(404, 'This page does not exist! Please try another URL, or go back to home page!')
})
const server = app.listen(port, () => { console.log(`Example app listening on port ${port}!`) })

module.exports = server;