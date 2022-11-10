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
  },

  {
    temestamps: true,
    versionKey: false,
  }

);

ProfessionalScheme.plugin(mongooseDelete, { overrideMethods: 'all' })
module.exports = mongoose.model("professionals", ProfessionalScheme)




// name: {
//   type: String,
// },
// lastname: {
//   type: String,
// },
// email: {
//   type: String,
//   unique: true,
// },
// password: {
//   type: String,
//   // default: "1234"
// },
// dni: {
//   type: String,
// },
// professionalId: {
//   type: String,
//   // default: 'SD-1234'
// },
// speciality: {
//   type: String,
//   // default: "asesino"
// },
// country: {
//   type: String,
//   // default: 'Argentina'
// },
// state: {
//   type: String,
//   // default: "La Pampa",
// },
// city: {
//   type: String,
//   // default: 'pepeCity'
// },
// zip: {
//   type: String,
//   // default: "123321"
// },
// professionalAdress: {
//   type: String,
//   // default: "asdasd"
// },
// schedule: {
//   type: String,
//   unique: true,
// },
// modality: {
//   type: ["presential", "remote"],
//   default: 'presential',
// }
