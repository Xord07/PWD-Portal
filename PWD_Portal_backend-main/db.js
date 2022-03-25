const mongoose = require("mongoose");

const connectMongo = async () => {
  await mongoose.connect("mongodb://localhost:27017/sihDB");
  console.log("Connected to mongo");
};

module.exports = connectMongo;
