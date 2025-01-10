import mongoose from "mongoose";

const schema=new mongoose.Schema({//phone number,last location, item name, emailid
    userid:{
        type:String,
        required:true},
    username:{
        type:String,
        required:true},
    picturepath:String,
    caption:String,
    comments:[{
        userid:{
            type:String,
            required:true,
        },
        username:{
            type:String,
            required:true,
        },
        comment:{
            type:String,
            required:true
        }
    }]
    },
    {timestamps: true}//to add "created" and "updated" directly 
);

const postmodel=mongoose.model("posts",schema);//here, it will be stored in the posts collection of the database
export default postmodel;
