import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import user from "../models/users.js";
import dotenv from 'dotenv'; 
dotenv.config(); 

const key=process.env.JWT_SECRET;

//REGISTER
export const register=async (req,resp)=>{
    //console.log(req.body);
    try{
        const{
            username,
            sid,
            emailid,
            password,}=req.body;
        const salt=await bcrypt.genSalt();
        const passwordF=await bcrypt.hash(password, salt);
        const newUser=new user({
            username,
            sid,
            emailid,
            password:passwordF,
        });
        const saveUser=await newUser.save();
        resp.status(201).json(saveUser);
    }
    catch(error){
        resp.status(500).json({"error":error.message});
    }
};

//LOGIN
export const login=async(req,resp)=>{
    try{
        const {emailid,password}=req.body;
        const currentUser=await user.findOne({emailid:emailid});
        if(!currentUser){
            return resp.status(404).json({message:"User not found"});
        }
        const boolean=await bcrypt.compare(password,currentUser.password);
        if(!boolean){
            return resp.status(401).json({message:"Invalid credentials. Please check again!"});
        }
        const generateToken=jwt.sign({id:currentUser._id},key);
        const userObject = currentUser.toObject(); // we need to convert this to plain object
        delete userObject.password;

        //delete currentUser.password;//so as not to pass this with the token //this doesn't work

        resp.json({generateToken,userObject});
    }
    catch(error){
        resp.status(500).json({"error":error.message});
    }
}
