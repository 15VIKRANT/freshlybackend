const express = require("express");
const cors=require("cors")
const mongoose = require("mongoose");
const port=process.env.PORT || 5100;
const connect=require("./configs/db");

const product=require("./models/product.model");
const recommend=require("./models/recommend.model");


const productcontroller=require("./controllers/product.controllers")
const recommendcontroller=require("./controllers/recommend.controller")

const app = express();

app.use(express.json());
app.use(cors());

app.use("/products",productcontroller);
app.use("/recommend",recommendcontroller);




module.exports = app;






app.listen(port,async()=>{
    try{
        await connect();
    }
    catch(err){
        console.log(err)
    }

    console.log(`listening on port ${port}`)
   
})