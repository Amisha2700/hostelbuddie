import express from "express";
import { createPost,readFeed,readSpec,update,deletePost } from "../controllers/posts_buy.js";
import { createSellPost,readSellFeed,readSellSpec,updateSell,deletePostSell } from "../controllers/posts_sell.js";
import {verify}  from "../middlewares/auth.js";
import { upload,cloudinaryFile } from '../middlewares/cloudinary.js';

const router = express.Router();

//buy
//creation
router.post("/newBuyPosts",verify,upload,cloudinaryFile,createPost);

//finding
router.get("/buy",verify,readFeed); //feed
router.get("/buy/:postid",verify,readSpec);//specific

//updating-commenting and adding new comments
router.patch("/comments_buy/:postid",verify,update);

//deletion
router.delete("/delete_buy/:postid",verify,deletePost)


//sell
//creation
router.post("/newSellPosts",verify,upload,cloudinaryFile,createSellPost);

//finding
router.get("/Sell",verify,readSellFeed); //feed
router.get("/Sell/:postid",verify,readSellSpec);//specific

//updating-commenting and adding new comments
router.patch("/comments_Sell/:postid",verify,updateSell);

//deletion
router.delete("/delete_Sell/:postid",verify,deletePostSell)

export default router;


