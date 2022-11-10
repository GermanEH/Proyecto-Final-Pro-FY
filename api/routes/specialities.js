const express = require("express");
const { getSpecialities, createSpecialities, getSpecialitiesById, editSpecialities, deleteSpecialities } = require("../controllers/specialities");
const { validatorCreateSpecialities, validatorIdSpecialities, } = require("../validators/specialities");
const router = express.Router();


router.get("/", getSpecialities);

router.get("/:id", validatorIdSpecialities, getSpecialitiesById);

router.delete("/:id", validatorIdSpecialities, deleteSpecialities);

router.put("/:id", validatorCreateSpecialities, editSpecialities)

router.post("/", validatorCreateSpecialities, createSpecialities)



module.exports = router
