const mongoose = require('mongoose')
const mongooseDelete = require('mongoose-delete')
const queriesScheme = new mongoose.Schema(
  {


    id: {
      type: mongoose.Types.ObjectId,
    },
    createdDate: {
      type: Date,
    },
    queryDate: {
      type: Date,
    },
    motive: {
      type: String,
    },
    state: {       //opcional para uso nuestro
      type: ['pending', 'resolved'],
      defualt: 'pending'
    },
    userId: {
      type: mongoose.Types.ObjectId,
      required: true,
      ref: "users"
    },
    professionalId: {
      type: mongoose.Types.ObjectId,
      required: true,
      ref: "professionals"
    },
  },
  {
    temestamps: true,
    versionKey: false,
  }
)
queriesScheme.plugin(mongooseDelete, { overrideMethods: 'all' })
module.exports = mongoose.model("queries", queriesScheme)
