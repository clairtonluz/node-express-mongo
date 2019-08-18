module.exports = (req, res, next) => {
  res.status(404);
  res.send({
    message: 'Recurso não encontrado'
  });
};
