import express from "express";
import { makePost,readFeed,readSpecific,update,deletePost } from "../controllers/posts.js";
import { verify } from "../middlewares/auth.js";
import { uploadFile } from "../middlewares/upload.js";

const router=express.Router();

//creation
router.post("/newPosts",verify,uploadFile,makePost);

//finding
router.get("/",verify,readFeed); //feed
router.get("/:postid",verify,readSpecific);//specific

//updating-commenting
router.patch("/comments/:postid",verify,update);

//deletion
router.delete("/delete/:postid",verify,deletePost)

export default router;
