import mongoose from "mongoose";

const schema=new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    sid:{
        type:String,
        required:true
    },
    emailid:{
        type:String,
        required:true,
        unique: true,
    },
    password:{
        type:String,
        required:true,
    },
    },
    {timestamps:true}//to add "created" and "updated" automatically 
);

const usermodel=mongoose.model("users",schema);
export default usermodel;
