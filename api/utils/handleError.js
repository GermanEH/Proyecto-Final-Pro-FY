
const handleHttpError = (res, message = "someting happens", code = 403) => {
  res.status(code);
  res.send({ error: message })

}

module.exports = { handleHttpError }
