const mongoose = require('mongoose');
const config = require('config');
const db = config.get("mongoURI");

// Same thing as below, just looks cleaner
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI || db);
    console.log("MongoDB Connected...");
  } catch (err ) {
    console.error(err.message);
    process.exit(1);
  }
}

// const connectDB = () => {
//   mongoose.connect(process.env.MONGODB_URI || db).then(() => {
//     console.log("MongoDB Connected");
//   }).catch(err => {
//     console.error(err.message);
//     process.exit(1);
//   });
// }

module.exports = connectDB;