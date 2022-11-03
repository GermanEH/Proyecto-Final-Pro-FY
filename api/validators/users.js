const { check } = require("express-validator");
const validateResults = require("../utils/handleValidator");


const validatorCreateUser = [

  check("name")
    .exists()
    .notEmpty()
    .isLength({ min: 4, max: 30 }),
  check("email")
    .exists()
    .notEmpty()
    .isEmail(),
  check("favorites")
    .optional(),
  check("password")
    .exists()
    .notEmpty(),
  check("role")
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
