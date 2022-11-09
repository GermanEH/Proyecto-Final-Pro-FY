const express = require("express");
const { getUsers, createUsers, getUserById, deleteUsers, editUsers, } = require("../controllers/users");
const {useStripe} = require("../controllers/stripe")
const { validatorCreateUser, validatorIdUser } = require("../validators/users");
const router = express.Router();



router.get("/", getUsers);

router.get("/:id", validatorIdUser, getUserById);

router.delete("/", deleteUsers);

router.put("/", editUsers)

router.post("/", validatorCreateUser, createUsers)

// router.post("/pay", useStripe)






module.exports = router
