
const handleHttpError = (res, message = "someting happens", code = 400) => {
  res.status(code);
  res.send({ error: message })

}

module.exports = { handleHttpError }
