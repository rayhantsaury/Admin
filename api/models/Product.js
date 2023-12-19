const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    price: {
      type: Number,
      required: true,
    },
    photo: {
      type: String,
    },    
    username: {
        type: String,
        required: true,
      },
    category: {
        type:String,
        default:"General"
      },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", ProductSchema);
