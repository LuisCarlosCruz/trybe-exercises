// middleware de autenticação

const auth = (req, res, next) => {
  const { token } = req.headers;

  if (!token) next({ status: 401, message: "Token not found" });
  if (token !== "admin") next({ status: 403, message: "Not authorized" });

  // escrevendo na req p/ passar p/ outro middleware (productRegister)
  req.nome = "joao";
  req.idade = 21;
  req.email = "joaozinTrem@gmail.com";

  next();
};

module.exports = auth;
