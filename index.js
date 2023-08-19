// // index.js
const express = require("express");
const cors = require("cors");
// const bodyParser = require('body-parser');
const connectDB = require("./src/utils/db");
const videoController = require("./src/controllers/videoController");
const productController = require("./src/controllers/productController");
const commentController = require("./src/controllers/commentController");

const app = express();

// require('dotenv').config();

// // Middleware
// // Allow cross-origin requests from any origin

const corsOptions = {
  origin: "https://tokpedplay-fritzie.000webhostapp.com", // Replace with your allowed origin(s)
  optionsSuccessStatus: 200,
  allowedHeaders: "*",
};

app.use((req, res, next) => {
  res.setHeader(
    "Permissions-Policy",
    "ch-ua-full-version=(Chrome/88.0.4324.182);ch-ua-platform=Windows;ch-ua-platform-version=10.0.19041;ch-ua-model="
  );
  next();
});

app.use(cors(corsOptions));

// // Connect to the database
connectDB();

app.get("/videos", videoController.getVideos);
app.get("/products/:video_id", productController.getProductsByVideo);
app.get("/comments/:video_id", commentController.getCommentsByVideo);
app.post("/comments", commentController.submitComment);

app.all("/", (req, res) => {
  console.log("Just got a request!");
  res.send("Yo!");
});
app.listen(process.env.PORT || 3000);
