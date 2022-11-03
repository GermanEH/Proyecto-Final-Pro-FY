
const handleHttpError = (res, message = "algo sucuedio", code = 403) => {
  res.status(code);
  res.send({ error: message })

}

module.exports = { handleHttpError }
