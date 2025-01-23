import mongoose from "mongoose";

const itemSchema = new mongoose.Schema(
  {
    // userid:{
    //   type:String,
    //   required:true},

    // username:{
    //   type:String,
    //   required:true},
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

    price: {
      type: Number,
      required: true,
      min: 0, //Ensures price is non-negative
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

  { timestamps: true } 
  //To add created at and updated at fields
  
);

const ItemModel = mongoose.model("items", itemSchema); 
//'items' collection in the database

export default ItemModel;