const { matchedData } = require('express-validator');
const { storageModel } = require('../models')
const { handleHttpError } = require('../utils/handleError');
const PUBLIC_URL = process.env.PUBLIC_URL




/**
 *  Obtener lista de la base de datos!
 * @param {*} req 
 * @param {*} res 
 */
const getItems = async (req, res) => {
  try {
    const data = await storageModel.find({});
    res.send({ data })
  } catch (error) {
    handleHttpError(res, "Error subiendo media")
  }
}


/**
 *  Obtener por id!
 * @param {*} req 
 * @param {*} res 
 */
const getItemsById = async (req, res) => {
  try {
    const { id } = matchedData(req)
    const data = await storageModel.findById(id);
    res.send({ data })
  } catch (error) {
    console.log(error);
    handleHttpError(res, "Error obteniendo media")
  }
}
/**
 *  Obtener lista de la base de datos!
 * @param {*} req 
 * @param {*} res 
 */
const createItem = async (req, res) => {
  const { body, file } = req
  console.log(file);
  const fileData = {
    filename: file.filename,
    url: `${PUBLIC_URL}/${file.filename}`
  }
  const data = await storageModel.create(fileData)
  res.send({ data })
};
/**
 *  crear un registro!
 * @param {*} req 
 * @param {*} res 
 */
const deleteItem = async (req, res) => {
  try {
    req = matchedData(req)
    const { id } = req
    // console.log(id)
    const data = await storageModel.delete({ _id: id })
    res.send({ data })
  } catch (error) {
    handleHttpError(res, "Error borrando la información")

  }
}
/**
 *  actualizar un registro!
 * @param {*} req 
 * @param {*} res 
 */
const editItem = async (req, res) => { }



module.exports = { getItems, createItem, getItemsById, deleteItem, editItem }
