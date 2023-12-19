const mongoose = require("mongoose");

const RegisterSchema = new mongoose.Schema(
  {
    nama: {
      type: String,
      required: true,
    },
    ttl: {
        type: String,
        required: true,
      },
    alamat: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        required: true,
      },
      wa: {
        type: String,
        required: true,
      },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Register", RegisterSchema);
