const router = require("express").Router();
const Register = require("../models/Register");

//POST CATEGORY
router.post("/", async (req, res) => {
  const newReg = new Register(req.body);
  try {
    const savedReg = await newReg.save();
    return res.status(201).json(savedReg);
  } catch (err) {
    return res.status(500).json(err);
  }
});

//GET CATEGORY
router.get("/", async (req, res) => {
  try {
    const registers = await Register.find();
    return res.status(200).json(registers);
  } catch (err) {
    return res.status(500).json(err);
  }
});

module.exports = router;
