import user from "../models/users.js";
import bcrypt from "bcrypt"
import dotenv from 'dotenv'; 
dotenv.config(); 

const key=process.env.JWT_SECRET;

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
      const { newUsername } = req.body;
      const username = req.params.username;
  
      if (newUsername==username) {
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
    const { emailid} = req.params;

      if (!emailid) {
        return resp.status(400).json({ message: "Email ID is required." });
      }
      const currentUser = await user.findOne({ emailid: emailid });
      if (!currentUser) {
        return resp.status(404).json({ message: "User not found" });
      }
      currentUser.password = undefined;
      // currentUser.username = username;
      // currentUser.emailid = emailid;
      resp.status(200).json(currentUser);
          } catch (error) {
      resp.status(500).json({ error: error.message });
    }
  };

  
// forgot password
export const forgot_password = async (req, res) => {
  const { emailid } = req.body;

  try {
    const currentUser = await user.findOne({ emailid });

    if (!currentUser) {
      return res.status(404).json({ message: "User not found" });
    }

    //for security and verification
    const token = jwt.sign({ emailid }, key, { expiresIn: '1h' });

    currentUser.resetToken = token;
    currentUser.resetTokenExpiry = Date.now() + 3600000; // 1 hour
    await currentUser.save();

    const resetLink = `http://localhost:3000/reset-password?token=${token}`;

    //Set up Nodemailer transporter through which email is sent acc to a set template
    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    const mailOptions = {
      from: 'hostelbuddie@gmail.com', 
      to: currentUser.emailid,
      subject: 'Password Reset',
      text: `You requested a password reset. Click the link below to reset your password:\n\n${resetLink}\n\nIf you did not request this, please ignore this email.`,
    };

    await transporter.sendMail(mailOptions);

    //Once set=success
    res.status(200).json({ message: "Mail to reset password sent successfully!" });

  } catch (error) {
    console.error("Error in forgot password:", error);
    res.status(500).json({ message: "An error occurred while processing the request." });
  }
};



export const resetPassword = async (req, res) => {
  const { token, newPassword } = req.body;
  try {
    const decoded = jwt.verify(token, key);
    const user = await user.findOne({ emailid: decoded.email, resetToken: token });

    //means if no user or the key has expired
    if (!user || user.resetTokenExpiry < Date.now()) return res.status(400).send('Invalid or expired token');

    const hashedPassword = await bcrypt.hash(newPassword, 10);
    user.password = hashedPassword;
    //to invalidate the same reset token
    user.resetToken = null;
    user.resetTokenExpiry = null;
    await user.save();

    res.send('Password reset successfully');
  } catch (err) {
    res.status(400).send('Invalid token');
  }
};


