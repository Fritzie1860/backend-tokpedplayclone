// src/models/Video.js
const mongoose = require('mongoose');

const videoSchema = new mongoose.Schema({
  link_thumbnail: { type: String, required: true },
  link_video: { type: String, required: true },
  title: { type: String, required: true },
  upload_date: { type: Date, default: Date.now },
});

const Video = mongoose.model('Video', videoSchema);

module.exports = Video;
