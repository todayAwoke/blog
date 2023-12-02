const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    usename: String,
    email: String,
    password: String
});
const UserModel = mongoose.model('userCollection', userSchema) || mongoose.model('userCollection');
module.exports = UserModel;