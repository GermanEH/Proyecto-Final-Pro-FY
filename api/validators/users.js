const { check } = require("express-validator");
const validateResults = require("../utils/handleValidator");


const validatorCreateUser = [

  check("first_name")
    .exists()
    .notEmpty()
    .isLength({ min: 4, max: 30 }),
  check("last_name")
    .exists()
    .notEmpty()
    .isLength({ min: 4, max: 30 }),
  check("email")
    .exists()
    .notEmpty()
    .isEmail(),
  check("favorites")
    .optional(),
  check("state")
    .exists()
    .notEmpty(),
  check("city")
    .exists()
    .notEmpty(),
  check("password")
    .exists()
    .notEmpty(),
  check("role")
    .optional(),
  check("address")
    .exists()
    .notEmpty(),
  check("DNI")
    .exists()
    .notEmpty(),
  check("countries")
    .optional(),
  check("postcode")
    .exists()
    .notEmpty(),

  (req, res, next) => {
    return validateResults(req, res, next)
  }
];

const validatorIdUser = [

  check("id")
    .exists()
    .notEmpty()
    .isMongoId(),
  (req, res, next) => {
    return validateResults(req, res, next)
  }
];



module.exports = { validatorCreateUser, validatorIdUser }
