const { check } = require("express-validator");
const validateResults = require("../utils/handleValidator");



const validatorRegister = [

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
    .notEmpty()
    .isLength({ min: 4, max: 15 }),
  check("role")
    .optional(),
  check("address")
    .exists()
    .notEmpty(),
  check("DNI")
    .exists()
    .notEmpty()
    .isNumeric(),
  check("country")
    .optional(),
  check("postcode")
    .exists()
    .notEmpty(),

  (req, res, next) => {
    return validateResults(req, res, next)
  }
];


const validatorLogin = [
  check("email")
    .exists()
    .notEmpty()
    .isEmail(),
  check("password")
    .exists()
    .notEmpty()
    .isLength({ min: 4, max: 15 }),


  (req, res, next) => {
    return validateResults(req, res, next)
  }
];


module.exports = { validatorRegister, validatorLogin }
