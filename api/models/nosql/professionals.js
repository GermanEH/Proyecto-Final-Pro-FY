const mongoose = require('mongoose')

const ProfessionalScheme = new mongoose.Schema(
  {
    id: {
      type: mongoose.Types.ObjectId,
    },
    name: {
      type: String
    },
    lastname: {
      type: String,
    },
    email: {
      type: String,
      unique: true,
    },
    password: {
      type: String,
      // default: "1234"
    },
    dni: {
      type: String,
    },
    professionalId: {
      type: String,
      // default: 'SD-1234'
    },
    speciality: {
      type: String,
      // default: "asesino"
    },
    country: {
      type: String,
      // default: 'Argentina'
    },
    state: {
      type: String,
      // default: "La Pampa",
    },
    city: {
      type: String,
      // default: 'pepeCity'
    },
    zip: {
      type: String,
      // default: "123321"
    },
    professionalAdress: {
      type: String,
      // default: "asdasd"
    },
    schedule: {
      type: String,

    },
    modality: {
      type: ["presential", "remote"],
      default: 'presential',
    }
  },


  {
    temestamps: true,
    versionKey: false,
  }

);

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
