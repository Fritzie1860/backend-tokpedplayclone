// populate.js

const mongoose = require("mongoose");
const video = require("./Video");
const product = require("./Product");
const comment = require("./Comment");
const user = require("./User");

const videosData = [
  {
    link_thumbnail: "dummy.png",
    link_video: "https://www.youtube.com/watch?v=yoBibrIPWJQ",
    title: "MURAH BGT",
    upload_date: "2022-07-28",
  },
  {
    link_thumbnail: "dummy.png",
    link_video: "https://www.youtube.com/watch?v=yoBibrIPWJQ",
    title: "MURAH BGT",
    upload_date: "2022-07-28",
  },
  {
    link_thumbnail: "dummy.png",
    link_video: "https://www.youtube.com/watch?v=yoBibrIPWJQ",
    title: "MURAH BGT",
    upload_date: "2022-07-28",
  },
];

const productData = [
  {
    link_product: `https://www.tokopedia.com/baabudstore20/sweety-bronze-perekat-m-32`,
    title: `Mami Poko`,
    price: 2000,
    link_imageProduct: `product.jpg`,
  },
  {
    link_product: `https://www.tokopedia.com/baabudstore20/sweety-bronze-perekat-m-32`,
    title: `Poko Mami`,
    price: 6000,
    link_imageProduct: `product.jpg`,
  },
  {
    link_product: `https://www.tokopedia.com/baabudstore20/sweety-bronze-perekat-m-32`,
    title: `Mako Pomi`,
    price: 12000,
    link_imageProduct: `product.jpg`,
  },
  {
    link_product: `https://www.tokopedia.com/baabudstore20/sweety-bronze-perekat-m-32`,
    title: `Mami Poko`,
    price: 2000,
    link_imageProduct: `product.jpg`,
  },
  {
    link_product: `https://www.tokopedia.com/baabudstore20/sweety-bronze-perekat-m-32`,
    title: `Poko Mami`,
    price: 6000,
    link_imageProduct: `product.jpg`,
  },
  {
    link_product: `https://www.tokopedia.com/baabudstore20/sweety-bronze-perekat-m-32`,
    title: `Mako Pomi`,
    price: 12000,
    link_imageProduct: `product.jpg`,
  },
  {
    link_product: `https://www.tokopedia.com/baabudstore20/sweety-bronze-perekat-m-32`,
    title: `Mami Poko`,
    price: 2000,
    link_imageProduct: `product.jpg`,
  },
  {
    link_product: `https://www.tokopedia.com/baabudstore20/sweety-bronze-perekat-m-32`,
    title: `Poko Mami`,
    price: 6000,
    link_imageProduct: `product.jpg`,
  },
  {
    link_product: `https://www.tokopedia.com/baabudstore20/sweety-bronze-perekat-m-32`,
    title: `Mako Pomi`,
    price: 12000,
    link_imageProduct: `product.jpg`,
  },
];

async function insertVideo() {
  await video.insertMany(videosData);
  console.log("Videos data inserted successfully");
}

async function insertComment() {
  const videos = await video.find();
  for (const Video of videos) {
    await comment.create({
      video_id: Video._id,
      username: "Maleo",
      comment: "ggwp",
      timestamp: Date.now(),
    });
  }
  console.log("Comment data inserted successfully");
}

async function insertProduct() {
  const videos = await video.find();
  for (const videoDoc of videos) {
    const productDataWithVideoId = productData.map((productItem) => ({
      ...productItem,
      video_id: videoDoc._id,
    }));

    await product.insertMany(productDataWithVideoId);
  }
  console.log("Product data inserted successfully");
}

async function populateDatabase() {
  await mongoose.connect("mongodb+srv://final_db:final_db!@tokpedplay-fritzie.b3j9qs8.mongodb.net/", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  await insertVideo();
  await insertComment();
  await insertProduct();
}

populateDatabase();
