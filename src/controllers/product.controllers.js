const express = require("express");
const app=express();

const Product=require("../models/product.model")


// USERS CRUD
app.get("", async (req, res) => {
    try {
      const product = await Product.find().lean().exec();
  
      return res.status(200).send({ product: product }); // []
    } catch (err) {
      return res
        .status(500)
        .send({ message:err.message });
    }
  });
  
  module.exports=app;