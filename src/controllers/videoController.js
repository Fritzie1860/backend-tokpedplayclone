// src/controllers/videoController.js
const Video = require('../models/Video');

const getVideoById = async (req, res) => {
  try {
    const _id = req.params.video_id;
    console.log(_id);
    const datas = await Video.find(
      {_id},
    )
      .sort({ timestamp: -1 })
      .exec();
    res.json(datas);
  } catch (err) {
    res.status(500).json({ message: "Unable to fetch datas.", error: err });
  }
};

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
  getVideoById
};
