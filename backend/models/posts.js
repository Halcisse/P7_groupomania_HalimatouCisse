const mongoose = require("mongoose");

const postsSchema = mongoose.Schema({
  message: { type: String, required: true },
  imageUrl: { type: String, required: true },
  likes: { type: Number, default: 0 },
  dislikes: { type: Number, default: 0 },
  usersLiked: { type: ["String <userId>"], default: [] },
  usersDisliked: { type: ["String <userId>"], default: [] },
});

module.exports = mongoose.model("Posts", postsSchema);
