const cloudinary = require("cloudinary").v2;
const multer = require("multer");

// Cloudinary configuration
cloudinary.config({
  cloud_name: "dsjhwubhj",
  api_key: "359146528414793",
  api_secret: "S2gXZQPmyIC5OZm4Zlk8L1ZSm98",
});

// Multer memory storage setup
const storage = multer.memoryStorage();

// Multer middleware to handle single file upload
const upload = multer({ storage });

// Utility function for uploading an image to Cloudinary
async function imageUploadUtil(buffer, filename) {
  try {
    // Upload file to Cloudinary from buffer
    const result = await new Promise((resolve, reject) => {
      cloudinary.uploader.upload_stream(
        {
          resource_type: "auto",
          public_id: filename, // optional: specify a public ID for the uploaded file
        },
        (error, result) => {
          if (error) {
            reject(error);
          } else {
            resolve(result);
          }
        }
      ).end(buffer);
    });

    return result;
  } catch (error) {
    console.error("Cloudinary upload error:", error);
    throw error;
  }
}

module.exports = { upload, imageUploadUtil };
