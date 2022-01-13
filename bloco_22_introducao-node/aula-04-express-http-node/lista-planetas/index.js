const express = require("express");
const listaPlanetas = require("./listaPlanetas");

const app = express();

app.get("/planetas", (_req, res) => {
  return res.status(200).send(listaPlanetas);
});

app.listen(3001, () => {
  console.log("Aplicação ouvindo na porta http://localhost:3001/planetas");
});
