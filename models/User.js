const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
    name: String,
    email: {
        type: String,
        unique: true // Ensures email addresses are unique in the collection
    },
    password: String
});

// Don't forget to compile your model
const User = mongoose.model('User', userSchema);

module.exports = User; // This makes the User model accessible to other files
