const { usersModel } = require('../models');
const { handleHttpError } = require('../utils/handleError');
const { matchedData } = require('express-validator');



/**
 *  Obtener lista de la base de datos!
 * @param {*} req 
 * @param {*} res 
 */
const getUsers = async (req, res) => {
  try {
    const data = await usersModel.find({});
    res.send({ data })
  } catch (error) {
    handleHttpError(res, "Error_get_items")
  }
}

/**
 *  Obtener un detalle!
 * @param {*} req 
 * @param {*} res 
 */
const getUserById = async (req, res) => {
  try {
    req = matchedData(req)
    const { id } = req
    console.log(id)
    const data = await usersModel.findById(id)
    res.send({ data })
  } catch (error) {
    handleHttpError(res, "Error id usuario")

  }
}

/**
 * Crear un usuario!
 * @param {*} req 
 * @param {*} res 
 */

const createUsers = async (req, res) => {
  try {
    const body = matchedData(req)
    // console.log(body, bodyClean);
    const data = await usersModel.create(body)
    res.send({ data })
  } catch (error) {
    handleHttpError(res, "Error creando al usuario")
  }
}
/**
 * Borrar un uruario!
 * @param {*} req 
 * @param {*} res 
 */
const deleteUsers = async (req, res) => {
  try {
    req = matchedData(req)
    const { id } = req
    console.log(id)
    const data = await usersModel.delete({ _id: id })
    res.send({ data })
  } catch (error) {
    console.log(error);
    handleHttpError(res, "Error borrando usuario")
  }
}

/**
 *  actualizar un usuario!
 * @param {*} req 
 * @param {*} res 
 */
const editUsers = async (req, res) => {
  try {
    const { id, ...body } = matchedData(req)

    const data = await usersModel.findOneAndUpdate(
      id, body,
    )
    res.send({ data })
  } catch (error) {
    handleHttpError(res, "Error editando al usuario")
  }
}



module.exports = { getUsers, createUsers, getUserById, deleteUsers, editUsers }
