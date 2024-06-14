const DB = require("mongoose");

var blogSchema = new DB.Schema({
  title: {
    type: String,
    unique: false,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  createdUserId: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const BlogModel = DB.model("Blog", blogSchema);

module.exports = BlogModel;
