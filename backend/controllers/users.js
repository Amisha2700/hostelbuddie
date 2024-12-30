import user from "../models/users.js";
export const searchUser=async(req,resp)=>{
    try{
        const sid=req.params.sid;
        if(!sid)
            return resp.status(400).json({message:"SID was not passed"});
        const currentUser=await user.findOne({sid:sid});
        if(!currentUser)
            resp.status(404).json({message:"User not found"});
        else
            resp.status(200).json(currentUser);
    }
    catch(error){
        resp.status(500).json({error:error.message});
    }
};