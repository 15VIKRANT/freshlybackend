const mongoose = require("mongoose");

// USER SCHEMA
// Step 1 :- creating the schema
const recommendSchema = new mongoose.Schema(
    {
      dishimage:{ type: String, required:true },
      dishname: { type: String, required:true },
      Calorie: { type: String, required:true },
      Variety: { type: String, required:true },
      Serve: { type: String, required:true },
      Price: { type: Number, required:true }
     
    },
    {
      versionKey: false,
      timestamps: true, // createdAt, updatedAt
    }
  );
  
  // Step 2 : creating the model
  const recommend = mongoose.model("recommend",recommendSchema); // user => users

  module.exports=recommend;


 
