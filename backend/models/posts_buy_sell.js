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
    },
    
    contactInformation: {
      type: String,
      required: true,
    },
  },

  { timestamps: true } 
  //To add created at and updated at fields
  
);

const ItemModel = mongoose.model("items", itemSchema); 
//'items' collection in the database

export default ItemModel;