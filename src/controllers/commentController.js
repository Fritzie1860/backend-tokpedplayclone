// src/controllers/commentController.js
const Comment = require("../models/Comment");

const getCommentsByVideo = async (req, res) => {
  try {
    const video_id = req.params.video_id;
    const comments = await Comment.find(
      { video_id },
      "_id username comment timestamp"
    )
      .sort({ timestamp: -1 })
      .exec();
    res.json(comments);
  } catch (err) {
    res.status(500).json({ error: "Unable to fetch comments." });
  }
};

const submitComment = async (req, res) => {
  try {
    console.log(JSON.stringify(req.body));
    const { username, comment, video_id } = req.body;
    const videosData = [
      {
        video_id: video_id,
        comment: comment,
        username: username,
      },
    ];

    const createdComments = await Comment.create(videosData);
    console.log('Created comments:', createdComments);

    res.json({
      success: true,
      message: "Comment submitted successfully.",
      data: videosData,
    });
  } catch (err) {
    console.error("Error submitting comment:", err);
    res.status(500).json({ error: "Unable to submit comment.", data: err, isi: req.body});
  }
};


module.exports = {
  getCommentsByVideo,
  submitComment,
};
