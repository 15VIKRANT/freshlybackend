const mongoose = require("mongoose");

const connect = () => {
    return mongoose.connect(
       "mongodb+srv://Vikrant123:vikrant123@cluster0.tox0k.mongodb.net/freshly"
    );
  };

  module.exports=connect;