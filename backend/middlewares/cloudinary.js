import cloudinary from "../config/cloudinary.js";

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

    next();
  } 
  catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Image upload failed', error });
  }
};
