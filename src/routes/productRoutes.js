// src/routes/productRoutes.js
const express = require('express');
const productController = require('../controllers/productController');

const router = express.Router();

router.get('/products/:video_id', productController.getProductsByVideo);

module.exports = router;
