const mongoose = require("mongoose");

function connectDB() {
  const url = "mongodb+srv://akanksha315:Ak%40nkshaisthebest@akanksha.mis3acq.mongodb.net/BlogApp";

  try {
    mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }).then((res:any)=>
    {
      console.log("connected MongoDB")
    });
  } catch (err: any) {
    console.error(err.message);
    process.exit(1);
  }
}

module.exports = connectDB;
