const express = require("express");
const cors = require("cors");
const connectDB = require("./src/utils/db");
const videoController = require("./src/controllers/videoController");
const productController = require("./src/controllers/productController");
const commentController = require("./src/controllers/commentController");

const app = express();

const allowedOrigins = ['https://tokpedplay-fritzie.000webhostapp.com', 'https://tiny-red-dog-coat.cyclic.cloud'];

const corsOptions = {
  origin: function (origin, callback) {
    if (allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: ['GET', 'POST'],
  optionsSuccessStatus: 200
};

app.use(cors(corsOptions));

// Add Permissions-Policy header
app.use((req, res, next) => {
  res.setHeader(
    "Permissions-Policy",
    "ch-ua-full-version=(Chrome/88.0.4324.182);ch-ua-platform=Windows;ch-ua-platform-version=10.0.19041;ch-ua-model="
  );
  next();
});

// Connect to the database
connectDB();

app.get("/videos", videoController.getVideos);
app.get("/products/:video_id", productController.getProductsByVideo);
app.get("/comments/:video_id", commentController.getCommentsByVideo);
app.post("/comments", commentController.submitComment);

// app.all("/", (req, res) => {
//   console.log("Just got a request!");
//   res.send("Yo!");
// });

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
