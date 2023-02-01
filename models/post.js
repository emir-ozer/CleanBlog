const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//creating Schema
const PostSchema = new Schema({
  title: {type: String, require: true},
  detail: {type: String, require: true},
  dateCreated: {
    type: Date,
    default: Date.now,
  },
});

const Post = mongoose.model('Post', PostSchema);

//exporting Model
module.exports = Post;
