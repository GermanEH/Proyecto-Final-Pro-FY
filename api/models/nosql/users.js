const mongoose = require('mongoose')

const UserScheme = new mongoose.Schema(
  {
    id: {
      type: mongoose.Types.ObjectId,
    },
    first_name: {
      type: String,
    },
    last_name: {
      type: String,
    },
    DNI: {
      type: Number,
    },
    country: {       //opcional para uso nuestro
      type: String,
    },
    province: {
      type: String,
    },
    city: {
      type: String,
    },
    postcode: {
      type: String,
    },
    address: {
      type: String,
    },
    email: {
      type: String,
      unique: true,
    },
    favorites: {  //opcional para uso nuestro
      type: String,
    },
    password: {
      type: String,
    },
    role: {  //opcional para uso nuestro
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
