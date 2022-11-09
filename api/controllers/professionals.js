const { professionalsModel } = require('../models');
const { handleHttpError } = require('../utils/handleError');
const { matchedData } = require('express-validator');



/**
 *  Obtener lista de la base de datos!
 * @param {*} req 
 * @param {*} res 
 */
const getAllProfessionals = async (req, res) => {

  try {
    const data = await professionalsModel.find({});
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
const getProfessionalById = async (req, res) => {
  try {
    req = matchedData(req)
    const { id } = req
    console.log(id)
    const data = await professionalsModel.findById(id)
    res.send({ data })
  } catch (error) {
    handleHttpError(res, "Error id usuario")

  }
}

/**
 *  Obtener lista de la base de datos!
 * @param {*} req 
 * @param {*} res 
 */

const createProfessional = async (req, res) => {


  const { body } = req
  console.log(body)
  const data = await professionalsModel.create(body)

  res.send({ data })


}

/**
 *  crear un registro!
 * @param {*} req 
 * @param {*} res 
 */
const deleteProfessional = async (req, res) => {
  res.send('hola')

}
/**
 *  actualizar un registro!
 * @param {*} req 
 * @param {*} res 
 */
const editProfessional = async (req, res) => {
  res.send('hola')

}



module.exports = { getAllProfessionals, createProfessional, getProfessionalById, deleteProfessional, editProfessional }
