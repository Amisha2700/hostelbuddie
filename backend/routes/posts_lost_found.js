import express from "express";
import { makePost,readFeed,readSpecific,update,deletePost } from "../controllers/posts_lost_found.js";
import  {verify}  from "../middlewares/auth.js";
// import { uploadFile } from "../middlewares/upload.js";
import { upload,cloudinaryFile } from '../middlewares/cloudinary.js';

const router=express.Router();

//creation
router.post("/newPosts",verify,upload,cloudinaryFile,makePost);

//finding
router.get("/",verify,readFeed); //feed
router.get("/:postid",verify,readSpecific);//specific

//updating-commenting
router.patch("/comments/:postid",verify,update);

//deletion
router.delete("/delete/:postid",verify,deletePost)

export default router;
