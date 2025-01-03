import express from "express";
import { createPost,readFeed,readSpec,update,deletePost } from "../controllers/posts_buy_sell.js";
import { verify } from "../middlewares/auth.js";

const router = express.Router();

//creation
router.post("/newPosts",verify,createPost);

//finding
router.get("/",verify,readFeed); //feed
router.get("/:postid",verify,readSpecific);//specific

//updating-commenting and adding new comments
router.patch("/comments/:postid",verify,update);

//deletion
router.delete("/delete/:postid",verify,deletePost)

export default router;


