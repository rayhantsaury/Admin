const router = require("express").Router();
const Product = require("../models/Product");
const User = require("../models/User");

//CREATE
router.post("/", async (req, res) => {
  const newProduct = new Product(req.body);
  try {
    const savedProduct = await newProduct.save();
    return res.status(201).json(savedProduct);
  } catch (err) {
    return res.status(500).json(err);
  }
});

//UPDATE
router.put("/:id", async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product.username === req.body.username) {
    try {
      const updatedProduct = await Product.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      return res.status(200).json("Product updated successfully!");
    } catch (err) {
      return res.status(500).json(err);
    }
  } else {
    return res.status(401).json("You can update only your posts!");
  }
});

//DELETE
router.delete("/:id", async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product?.username === req.body.username) {
    try {
      await product.delete();
      return res.status(200).json("Product Deleted successfully!");
    } catch (err) {
      return res.status(500).json(err);
    }
  } else {
    return res.status(401).json("You can delete only your account!");
  }
});

//GET
router.get("/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    return res.status(200).json(product);
  } catch (err) {
    return res.status(500).json(err);
  }
});

//GET ALL
router.get("/", async (req, res) => {
  const username = req.query.username;
  const categoryName = req.query.category;
  try {
    let products;
    if (username && categoryName) {
      products = await Product.find({
        categories: {
          $in: [categoryName],
        },
      });
      products = products.filter((p) => p.username === username);
    } else if (username) {
      products = await Product.find({ username });
    } else if (categoryName) {
      products = await Product.find({
        category: categoryName,
      });
    } else {
      products = await Product.find();
    }
    return res.status(200).json(products);
  } catch (err) {
    return res.status(500).json(err);
  }
});

module.exports = router;
