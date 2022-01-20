const error = (err, req, res, next) => {
  // Boa prática para debugar o erro e saber o path
  console.log(err.message);

  // erro esperado - passar o status p/ o erro
  if (err.status) {
    return res.status(err.status).json({ message: `${err.message}` });
  }

  return res.status(500).json({ message: "Internal Error Server" });
};

module.exports = error;

// lib de tratamento de erro (BOOM e JOI)
