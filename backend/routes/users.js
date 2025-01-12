import express from "express";
import {searchUser,updatePassword} from "../controllers/users.js";

const router=express.Router();

router.get("/search/:emailid?",searchUser);
router.post("/update/:emailid?",updatePassword);

export default router;