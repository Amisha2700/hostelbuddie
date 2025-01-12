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

// Update username
export const updateUsername = async (req, resp) => {
    try {
      const emailid = req.params.emailid; // Assuming the emailid is available in the JWT token
      const { newUsername } = req.body.newUsername;
  
      if (!newUsername) {
        return resp.status(400).json({ message: "New username is required." });
      }
      //To check if the new username is already taken
      const existingUser = await user.findOne({ username: newUsername });
      if (existingUser) {
        return resp.status(400).json({ message: "Username already taken." });
      }
  
      //Updating the username in the database using emailid
      const updatedUser = await user.findOneAndUpdate(
        { emailid: emailid },
        { username: newUsername },
        { new: true }
      );
      resp.status(200).json({ message: "Username updated successfully", updatedUser });
    } catch (error) {
      resp.status(500).json({ error: error.message });
    }
  };
  
  export const viewProfile = async (req, resp) => {
    try {
      const emailid = req.params.emailid;
      if (!emailid) {
        return resp.status(400).json({ message: "Email ID is required." });
      }
      const currentUser = await user.findOne({ emailid: emailid });
      if (!currentUser) {
        return resp.status(404).json({ message: "User not found" });
      }
      // Remove password from the response
      currentUser.password = undefined;
      resp.status(200).json(currentUser);
          } catch (error) {
      resp.status(500).json({ error: error.message });
    }
  };
  