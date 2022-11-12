const mongoose = require('mongoose')
const mongooseDelete = require('mongoose-delete')
const ReviewsScheme = new mongoose.Schema(
  {
    id: {
      type: mongoose.Types.ObjectId,
    },
    review: {
      type: String
    },
    user: {
      userId: mongoose.Types.ObjectId,
      required: true,
      ref: "users"
    },
    professional: {
      professionalId: mongoose.Types.ObjectId,
      required: true,
      ref: "professionals"
    },
    response: {
      reviewId: mongoose.Types.ObjectId,
      type: String,
      //hola
    }
  },
  {
    temestamps: true,
    versionKey: false,
  }

);



ReviewsScheme.plugin(mongooseDelete, { overrideMethods: 'all' })
module.exports = mongoose.model("reviews", ReviewsScheme)



