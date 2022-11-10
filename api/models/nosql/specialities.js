const mongoose = require('mongoose')
const mongooseDelete = require('mongoose-delete')
const SpecialtiesScheme = new mongoose.Schema(

  {
    name: {
      type: String,
      unique: true
    },

  },
  {
    timestamps: true,
    versionKey: false
  }

);
SpecialtiesScheme.plugin(mongooseDelete, { overrideMethods: 'all' })
module.exports = mongoose.model("specialties", SpecialtiesScheme)
