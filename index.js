// index.js
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const connectDB = require('./src/utils/db');
const authRoutes = require('./src/routes/authRoutes');
const videoRoutes = require('./src/routes/videoRoutes');
const productRoutes = require('./src/routes/productRoutes');
const commentRoutes = require('./src/routes/commentRoutes');

const app = express();

require('dotenv').config();

// Middleware
// Allow cross-origin requests from any origin
app.use(cors());
app.use(bodyParser.json());

// Connect to the database
connectDB();

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/video', videoRoutes);
app.use('/api/product', productRoutes);
app.use('/api/comment', commentRoutes);

// Start the server
const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
