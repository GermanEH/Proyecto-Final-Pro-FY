const { check } = require("express-validator");
const validateResults = require("../utils/handleValidator");


const validatorCreateProfessional = [

  check("name")
    .exists()
    .notEmpty()
    .isLength({ min: 4, max: 100 }),
  check("lastname")
    .exists()
    .notEmpty()
    .isLength({ min: 4, max: 100 }),
  check("email")
    .exists()
    .notEmpty()
    .isEmail(),
  check("password")
    .exists()
    .notEmpty(),
  check("dni")
    .exists()
    .notEmpty(),
  check("professionalId")
    .exists()
    .notEmpty(),
  check("speciality")
    .exists()
    .notEmpty(),
  check("country")
    .exists()
    .notEmpty(),
  check("state")
    .exists()
    .notEmpty(),
  check("city")
    .exists()
    .notEmpty(),
  check("zip")
    .exists()
    .notEmpty(),
  check("professionalAdress")
    .exists()
    .notEmpty(),
  check("schedule")
    .optional(), //! temporal
  check("modality")
    .optional(), //! temporal


  (req, res, next) => {
    return validateResults(req, res, next)
  }
];

const validatorIdProfessional = [

  check("id")
    .exists()
    .notEmpty()
    .isMongoId(),
  (req, res, next) => {
    return validateResults(req, res, next)
  }
];



module.exports = { validatorCreateProfessional, validatorIdProfessional }
