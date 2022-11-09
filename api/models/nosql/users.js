const mongoose = require('mongoose')

const UserScheme = new mongoose.Schema(
  {
    id: {
      type: mongoose.Types.ObjectId,
    },
    name: {
      type: String,
    },
    lastname: {
      type: String,
    },
    dni: {
      type: String,
    },
    country: {
      type: String,
      default: 'Argentina'
    },
    state: {
      type: String,
    },
    city: {
      type: String,
    },
    zip: {
      type: String,
    },
    address: {
      type: String,
    },
    email: {
      type: String,
      unique: true,
    },
    favorites: {
      type: String,
    },
    password: {
      type: String,
    },
    role: {
      type: ["user", "admin", "pro"],
      default: "user",
    }
  },
  {
    temestamps: true,
    versionKey: false,
  }
)

module.exports = mongoose.model("users", UserScheme)
