import cloudinary from "../config/cloudinary.js";
import multer from "multer"
import fs from "fs"

export const upload=multer({dest:"uploaded"})

export const cloudinaryFile = async (req, res, next) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: 'No file uploaded' });
    }

    //Upload the image to Cloudinary
    const result = await cloudinary.uploader.upload(req.file.path, {
      folder: 'user_images', // Cloudinary folder name
    });

    req.body.picturepath = result.secure_url;

    fs.unlink(req.file.path, (err) => {
      if (err) console.error("Failed to delete local file:", err);
    });

    next();
  } 
  catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Image upload failed', error });
  }
};

