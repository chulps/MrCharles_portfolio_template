const mongoose = require("mongoose")
const Schema = mongoose.Schema

const userSchema = new Schema({
  userName: String,
  fullName: String,
  role: String,
  picture: String
})

const User = mongoose.model("User", userSchema)

module.exports = User
