import express from "express";
import { makeLostPost,readLostFeed,readLostSpecific,updateLost,deleteLostPost } from "../controllers/posts_lost.js";
import { makeFoundPost,readFoundFeed,readFoundSpecific,updateFound,deleteFoundPost } from "../controllers/posts_found.js";
import  {verify}  from "../middlewares/auth.js";
// import { uploadFile } from "../middlewares/upload.js";
import { upload,cloudinaryFile } from '../middlewares/cloudinary.js';

const router=express.Router();

//creation
router.post("/newLostPosts",verify,upload,cloudinaryFile,makeLostPost);
router.post("/newFoundPosts",verify,upload,cloudinaryFile,makeFoundPost);

//finding-lost
router.get("/lost",verify,readLostFeed); //feed
router.get("/lost/:postid",verify,readLostSpecific);//specific

router.get("/found",verify,readFoundFeed); //feed
router.get("/found/:postid",verify,readFoundSpecific);//specific


//updating-commenting
router.patch("/comments_lost/:postid",verify,updateLost);
router.patch("/comments_found/:postid",verify,updateFound);

//deletion
router.delete("/delete_lost/:postid",verify,deleteLostPost)
router.delete("/delete_found/:postid",verify,deleteFoundPost)

export default router;
