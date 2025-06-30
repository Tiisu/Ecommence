const cloudinary = require("cloudinary").v2;
const multer = require("multer");

// Load environment variables
require('dotenv').config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME || "your_cloud_name",
  api_key: process.env.CLOUDINARY_API_KEY || "your_api_key",
  api_secret: process.env.CLOUDINARY_API_SECRET || "your_api_secret",
  secure: true, // Force HTTPS URLs
});

const storage = new multer.memoryStorage();

async function imageUploadUtil(file) {
  const result = await cloudinary.uploader.upload(file, {
    resource_type: "auto",
    secure: true, // Force HTTPS URLs for uploads
  });

  return result;
}

const upload = multer({ storage });

module.exports = { upload, imageUploadUtil };
