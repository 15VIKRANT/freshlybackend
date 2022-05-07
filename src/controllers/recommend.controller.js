const express = require("express");
const app=express();

const Recommend=require("../models/recommend.model")


// USERS CRUD
app.get("", async (req, res) => {
    try {
      const recommend = await Recommend.find().lean().exec();
  
      return res.status(200).send({ recommend: recommend }); // []
    } catch (err) {
      return res
        .status(500)
        .send({ message:err.message });
    }
  });
  
  module.exports=app;