import mongoose from "mongoose";

const itemSchema = new mongoose.Schema(
  {
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
      min: 0, // Ensures price is non-negative
    },
    
    contactInformation: {
      type: String,
      required: true,
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

  { timestamps: true } 
  //To add created at and updated at fields
  
);

const ItemModel = mongoose.model("items", itemSchema); 
//'items' collection in the database

export default ItemModel;