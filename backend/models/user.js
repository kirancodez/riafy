const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
        type: String,
        trim: true,
        maxlength: 20,
        required: true
    }
})

module.exports = mongoose.model("User", userSchema);