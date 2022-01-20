const productRegister = (req, res, next) => {
  console.log("produto registrado");

  const { name, preco } = req.body;

  //Recebendo dados q foram escritos no middleware anterior
  const { nome, idade, email } = req;
  console.log(nome, idade, email);

  if (!name) {
    // next com param, redireciona p/ o middlware de error
    next({ status: 400, message: "name not found" });
  }

  const product = {
    name,
    preco,
  };

  return res.status(201).json(product);
};

module.exports = productRegister;
