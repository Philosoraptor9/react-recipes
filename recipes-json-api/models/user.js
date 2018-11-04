const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: String, required, unique,
    password: String, required
});

module.exports = mongoose.model('User', userSchema)