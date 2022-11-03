const mongoose = require('mongoose')

const UserScheme = new mongoose.Schema(
  {
    id: {
      type: mongoose.Types.ObjectId,
    },
    name: {
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
