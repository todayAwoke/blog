const mongoose = require('mongoose');
const PostSchema = new mongoose.Schema({
    title: String,
    description: String,
    file: String,
})
const postblog = mongoose.model('posts', PostSchema) || mongoose.model('Post');
module.exports = postblog;