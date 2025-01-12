import user from "../models/users.js";
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