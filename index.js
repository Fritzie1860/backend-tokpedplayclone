// // index.js
const express = require("express");
const cors = require("cors");
// const bodyParser = require('body-parser');
const connectDB = require("./src/utils/db");
// const authRoutes = require('./src/routes/authRoutes');
// const videoRoutes = require('./src/routes/videoRoutes');
const videoController = require("./src/controllers/videoController");
const productController = require("./src/controllers/productController");
const commentController = require("./src/controllers/commentController");

// const productRoutes = require('./src/routes/productRoutes');
// const commentRoutes = require('./src/routes/commentRoutes');

const app = express();

// require('dotenv').config();

// // Middleware
// // Allow cross-origin requests from any origin
const corsOptions = {
  origin: "https://tokpedplay-fritzie.000webhostapp.com", // Replace with your allowed origin(s)
  optionsSuccessStatus: 200,
  allowedHeaders: "*",
};

app.use(cors(corsOptions));
// app.use((req, res, next) => {
//     res.header('Access-Control-Allow-Origin', 'https://tokpedplay-fritzie.000webhostapp.com'); // Tambahkan domain ini
//     res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
//     next();
// });
// app.use(bodyParser.json());

// // Connect to the database
connectDB();

app.get("/videos", videoController.getVideos);
app.get("/products/:video_id", productController.getProductsByVideo);
app.get("/comments/:video_id", commentController.getCommentsByVideo);
app.post("/comments", commentController.submitComment);

// // Routes
// app.use('/api/video', videoRoutes);
// app.use('/api/product', productRoutes);
// app.use('/api/comment', commentRoutes);

// app.all('/', (req, res) => {
//   console.log("Just got a request!")
//   res.send('Yo!')
// })

// // Start the server
// app.listen(process.env.PORT || 3000)

// const express = require('express')
// const app = express()
app.all("/", (req, res) => {
  console.log("Just got a request!");
  res.send("Yo!");
});
app.listen(process.env.PORT || 3000);
