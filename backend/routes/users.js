import express from "express";
import {searchUser} from "../controllers/users.js";

const router=express.Router();

router.get("/search/:sid?",searchUser);

export default router;