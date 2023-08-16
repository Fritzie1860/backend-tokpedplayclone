// src/models/Product.js
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  video_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Video', required: true },
  link_product: { type: String, required: true },
  price: { type: Number, required: true },
  title: { type: String, required: true },
  link_imageProduct: { type: String, required: true },
});

const Product = mongoose.model('Product', productSchema);
module.exports = Product;
