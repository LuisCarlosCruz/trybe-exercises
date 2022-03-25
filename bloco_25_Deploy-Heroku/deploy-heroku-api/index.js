const express = require("express");

const app = express();

const port = process.env.PORT || 3000;

app.get('/', (req, res) => res.status(200).send('Hello Heroku!'));

app.listen(port, () => {
  console.log(`Aplicação ouvindo na porta http://localhost:${port}`);
});