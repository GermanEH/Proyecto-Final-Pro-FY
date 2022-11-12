const mongoose = require('mongoose')
const mongooseDelete = require('mongoose-delete')
const ProfessionalScheme = new mongoose.Schema(
  {
    id: {
      type: mongoose.Types.ObjectId,
    },
    first_name: {
      type: String
    },
    last_name: {
      type: String,
    },
    email: {
      type: String,
      unique: true,
    },
    password: {
      type: String,
    },
    dni: {
      type: String,
    },
    professionalId: {
      type: String,
    },
    country: {
      type: String,
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
    professionalAdress: {
      type: String,
    },
    schedule: {
      type: String,

    },
    modality: {
      type: ["presential", "remote"],
      default: 'presential',
    },

    specialities: {

      type: mongoose.Types.ObjectId,
      // required: true,
      // ref: "specialities"
    },

  },
  {
    temestamps: true,
    versionKey: false,
  }
);

// ProfessionalScheme.statics.findSpecialty = function () {
//   const joinSpe = this.aggregate([
//     {
//       $lookup: {
//         from: "specialities",
//         localField: "id",
//         foreignField: "_id",
//         as: "professionalSpeciality"
//       }
//     }
//   ])
//   return joinSpe
// return this.find({ name: new RegExp(name, 'i') });
//};



ProfessionalScheme.plugin(mongooseDelete, { overrideMethods: 'all' })
module.exports = mongoose.model("professionals", ProfessionalScheme)



