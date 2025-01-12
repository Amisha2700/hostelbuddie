import user from "../models/users.js";
import bcrypt from "bcrypt"
export const searchUser=async(req,resp)=>{
    try{
        const emailid=req.params.emailid;
        //console.log(emailid);
        if(!emailid)
            return resp.status(400).json({message:"Parameter was not passed"});
        const currentUser=await user.findOne({emailid:emailid});
        if(!currentUser)
            resp.status(404).json({message:"User not found"});
        else
            resp.status(200).json(currentUser);
    }
    catch(error){
        resp.status(500).json({error:error.message});
    }
};
export const updatePassword=async(req,resp)=>{
    try{
        const emailid=req.params.emailid;
        const newpassword=req.body.newpassword;
        if (!emailid || !newpassword) {
            return resp.status(400).json({ message: "Email ID and new password are required." });
        }
        const salt=await bcrypt.genSalt();
        const passwordF=await bcrypt.hash(newpassword, salt);
        await user.updateOne({emailid:emailid},{$set:{password:passwordF}});
        resp.status(200).json({message:"Done!"})
    }
    catch(error){
        resp.status(500).json({error:error.message});
    }
}