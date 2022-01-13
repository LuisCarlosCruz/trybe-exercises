const express = require("express");
const listaRickMorty = require("./listaRickMorty");

const app = express();

app.get("/personagens", (_red, res) => {
  return res.status(200).send(listaRickMorty);
});

app.get("/personagem/:id", (req, res) => {
  const { id } = req.params;

  const personagem = listaRickMorty.filter((item) => item.id === +id);

  return res.status(200).send(personagem);
});

app.listen(3001, () => {
  console.log("Aplicação ouvindo na porta http://localhost:3001/personagens");
});
