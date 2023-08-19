const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const connectDB = require("./src/utils/db");
const videoController = require("./src/controllers/videoController");
const productController = require("./src/controllers/productController");
const commentController = require("./src/controllers/commentController");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "DELETE, PUT, GET, POST");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader("Access-Control-Allow-Credentials", "true");
  if ("OPTIONS" == req.method) {
    res.sendStatus(200);
  } else {
    next();
  }
});
app.use(bodyParser.json());

// // Connect to the database
connectDB();

app.get("/videos", videoController.getVideos);
app.get("/videos/:video_id", videoController.getVideoById);
app.get("/products/:video_id", productController.getProductsByVideo);
app.get("/comments/:video_id", commentController.getCommentsByVideo);
app.post("/comments", commentController.submitComment);

app.all("/", (req, res) => {
  console.log("Just got a request!");
  res.send("Yo!");
});
app.listen(process.env.PORT || 3000);
