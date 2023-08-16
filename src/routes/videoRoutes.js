// src/routes/videoRoutes.js
const express = require('express');
const videoController = require('../controllers/videoController');

const router = express.Router();

router.get('/videos', videoController.getVideos);

module.exports = router;
