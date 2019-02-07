const db = require('./index.js'); // we only need this file to start our connection
const VideoModel = require('./VideoModel.js');
const mongoose = require('mongoose');

const sampleVideos = [
  {
    numberOfDislikes: 5,
    numberOfLikes: 10,
    title: 'Funny Cat Video',
    videoOwnerId: '9746184',
    videoOwnerUsername: 'CatLady66',
    videoThumbnailURL: 'https://res.cloudinary.com/degfz2fjj/image/upload/v1549437116/fec6-videos/funny_kitten_thumbnail.png',
    videoURL: 'https://res.cloudinary.com/degfz2fjj/video/upload/v1549430917/fec6-videos/funny_kitten.mp4',
    viewCount: 50,
  },
  {
    numberOfDislikes: 7,
    numberOfLikes: 13,
    title: 'Funny Cat Video 2',
    videoOwnerId: '9746185',
    videoOwnerUsername: 'CatLady67',
    videoThumbnailURL: 'https://res.cloudinary.com/degfz2fjj/image/upload/v1549437116/fec6-videos/funny_kitten_thumbnail.png',
    videoURL: 'https://res.cloudinary.com/degfz2fjj/video/upload/v1549430917/fec6-videos/funny_kitten.mp4',
    viewCount: 51,
  },
  {
    numberOfDislikes: 8,
    numberOfLikes: 14,
    title: 'Funny Cat Video 4',
    videoOwnerId: '9746185',
    videoOwnerUsername: 'CatLady68',
    videoThumbnailURL: 'https://res.cloudinary.com/degfz2fjj/image/upload/v1549437116/fec6-videos/funny_kitten_thumbnail.png',
    videoURL: 'https://res.cloudinary.com/degfz2fjj/video/upload/v1549430917/fec6-videos/funny_kitten.mp4',
    viewCount: 52,
  },
]

const seedDb = function () {
  VideoModel.deleteMany({})
    .then(() => {
      console.log('Video collection removed before seeding to avoid duplication!')
      
      VideoModel.create(sampleVideos)
        .then(() => {
          console.log('Database seeded. Closing db connection!')
          mongoose.disconnect();
        });
    })


};

seedDb();