import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import multer from "multer";

dotenv.config();//to load the environment variables
const app=express();
const PORT=process.env.PORT||3000;

app.use(express.json());

import authRoutes from "./routes/auth.js";
import {verify} from "./middlewares/auth.js";


app.use("/auth",authRoutes);

//app.get("/protected",verify,(req,resp)=>{  //working fine(verification waala)
   // resp.json({message:req.user})
//});

mongoose.connect(process.env.MONGO_URL)
.then(()=>{
    console.log("Database Connected successfully!");
    app.listen(PORT,()=>console.log(`Running on port ${PORT}`));
})
.catch((error)=>{
    console.error("Database connection failed ",error.message);
    process.exit(1);//exit if the database is not connected
});

