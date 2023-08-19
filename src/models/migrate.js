// populate.js

const mongoose = require("mongoose");
const video = require("./Video");
const product = require("./Product");
const comment = require("./Comment");

const videosData = [
  {
    link_thumbnail: "Gambar1.jpeg",
    link_video: "yoBibrIPWJQ",
    title: "Tato Temporary kack!",
    upload_date: "2022-07-28",
  },
  {
    link_thumbnail: "Gambar2.jpeg",
    link_video: "sP2ZwmET0CI",
    title: "Diskon 60% + POUCH",
    upload_date: "2022-07-28",
  },
  {
    link_thumbnail: "Gambar3.jpeg",
    link_video: "yewZ45-DdLw",
    title: "Wangi betul, Murah betul!",
    upload_date: "2022-07-28",
  },
  {
    link_thumbnail: "Gambar4.jpeg",
    link_video: "yoBibrIPWJQ",
    title: "Tissue NICE ada give away",
    upload_date: "2022-07-28",
  },
  {
    link_thumbnail: "Gambar5.jpeg",
    link_video: "sP2ZwmET0CI",
    title: "WEEKEND MERDEKA SALE cuma sejam",
    upload_date: "2022-07-28",
  },
  {
    link_thumbnail: "Gambar6.jpeg",
    link_video: "yewZ45-DdLw",
    title: "BEAUTY TOOLS",
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
      username: "Zie",
      comment: "minat kak",
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
  await mongoose.connect("mongodb+srv://fritzie:final_db@tokpedplay-db.tziprpl.mongodb.net/", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  await insertVideo();
  await insertComment();
  await insertProduct();
}

populateDatabase();
