// src/controllers/videoController.js
const Video = require('../models/Video');

// Get a list of videos with thumbnails from YouTube
const getVideos = async (req, res) => {
  try {
    const videos = await Video.find();
    res.json(videos);
  } catch (err) {
    res.status(500).json({ error: 'Unable to fetch videos.', data: err });
  }
};

module.exports = {
  getVideos,
};
