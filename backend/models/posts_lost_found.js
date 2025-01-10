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

    phoneNumber: {
        type: String,
        required: true,
        match: [/^\d{10}$/, "Please enter a valid 10-digit phone number"]
    },

    lastLocation: {
        type: String,
        required: true
    },

    itemName: {
        type: String,
        required: true
    },

    emailid: {
        type: String,
        required: true,
        match: [/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/ , "Please enter a valid 10-digit phone number"]
    },

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
