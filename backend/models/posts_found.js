import mongoose from "mongoose";

const schema=new mongoose.Schema({
    // sid:{
    //     type:Number,
    //     required:true},

    // username:{
    //     type:String,
    //     required:true},
    postid:String,

    emailid:{
      type:String,
      required:true
    },
    picturepath:String,

    itemName: {
        type: String,
        required: true,
      },
  
      itemDescription: {
        type: String,
        required: true,
      },

      contactInformation: {
        type: String,
        required: true,
  
        validate: {
        validator: function (value) {
          // Example: Check if it's a valid email or phone number
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          const phoneRegex = /^\+?[1-9]\d{1,14}$/; 
          return emailRegex.test(value) || phoneRegex.test(value);
        },
        message: 'Enter valid email or phone number',
      },
    },
  

    comments:[{
        // userid:{
        //     type:String,
        //     required:true,
        // },
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

const postmodel=mongoose.model("found_posts",schema);//here, it will be stored in the posts collection of the database
export default postmodel;
