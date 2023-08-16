// src/routes/commentRoutes.js
const express = require('express');
const commentController = require('../controllers/commentController');

const router = express.Router();

router.get('/comments/:video_id', commentController.getCommentsByVideo);
router.post('/comments', commentController.submitComment);

module.exports = router;
