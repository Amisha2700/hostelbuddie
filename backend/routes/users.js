import express from "express";
import {searchUser,updatePassword, updateUsername, viewProfile} from "../controllers/users.js";

const router=express.Router();

//route to search using mail id
router.get("/search/:emailid?",searchUser);
//route to update password
router.put("/update-password/:emailid?",updatePassword);
//route to update username
router.put("/update-username/:emailid?", updateUsername);
// Route to view profile
router.get("/view-profile/:emailid?", viewProfile);

export default router;