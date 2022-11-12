// const mongoose = require('mongoose')
// const mongooseDelete = require('mongoose-delete')
// const UserScheme = new mongoose.Schema(
//   {


//     id: {
//       type: mongoose.Types.ObjectId,
//     },
//     createdDate: {
//       type: String,
//     },
//     queryDate: {
//       type: String,
//     },
//     motive: {
//       type: Number,
//     },
//     state: {       //opcional para uso nuestro
//       type: String,
//     },
//     userId: {
//       type: String,
//     },
//     professionalId: {
//       type: String,
//     },

//     role: {  //opcional para uso nuestro
//       type: ["user", "admin", "pro"],
//       default: "user",
//     }
//   },
//   {
//     temestamps: true,
//     versionKey: false,
//   }
// )
// UserScheme.plugin(mongooseDelete, { overrideMethods: 'all' })
// module.exports = mongoose.model("users", UserScheme)
