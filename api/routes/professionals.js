const express = require("express");
const { getAllProfessionals, getProfessionalById, deleteProfessional, editProfessional, createProfessional, } = require("../controllers/professionals");
const { validatorCreateProfessional, validatorIdProfessional } = require("../validators/professionals");


//! no entiendo pregunbtar rod
// const { useStripe } = require("../controllers/stripe")
// const { validatorCreateUser, validatorIdUser } = require("../validators/users");
const router = express.Router();



router.get("/", getAllProfessionals);

router.get("/:id", validatorIdProfessional, getProfessionalById);

router.delete("/", deleteProfessional);

router.put("/", validatorCreateProfessional, editProfessional)

router.post("/", createProfessional)

// validatorCreateProfessional








module.exports = router
