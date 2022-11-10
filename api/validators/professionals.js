const { check } = require("express-validator");
const validateResults = require("../utils/handleValidator");


const validatorCreateProfessional = [

  check("first_name")
    .exists()
    .notEmpty()
    .isLength({ min: 4, max: 100 }),
  check("last_name")
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
    .optional(),
  // .exists()
  // .notEmpty(),
  check("professionalId")
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
