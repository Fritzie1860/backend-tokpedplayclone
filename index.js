// // index.js
const express = require('express');
const cors = require('cors');
// const bodyParser = require('body-parser');
const connectDB = require('./src/utils/db');
// const authRoutes = require('./src/routes/authRoutes');
// const videoRoutes = require('./src/routes/videoRoutes');
const videoController = require('./src/controllers/videoController');
const productController = require('./src/controllers/productController');
const commentController = require('./src/controllers/commentController');

// const productRoutes = require('./src/routes/productRoutes');
// const commentRoutes = require('./src/routes/commentRoutes');

const app = express();

// require('dotenv').config();

// // Middleware
// // Allow cross-origin requests from any origin
app.use(cors());
// app.use(bodyParser.json());

// // Connect to the database
connectDB();

app.get('/videos', videoController.getVideos);
app.get('/products/:video_id', productController.getProductsByVideo);
app.get('/comments/:video_id', commentController.getCommentsByVideo);
app.post('/comments', commentController.submitComment);

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
app.all('/', (req, res) => {
    console.log("Just got a request!")
    res.send('Yo!')
})
app.listen(process.env.PORT || 3000)