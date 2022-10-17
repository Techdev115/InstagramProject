const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  caption: String,
  images: [
    {
      type: String,
      require: true,
    },
  ],
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  likes: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  comments: [
    {
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
      comment: {
        type: String,
        required: [true, "Empty comment not allowed"],
      },
    },
  ],
});

module.exports = new mongoose.model("Post", postSchema);
