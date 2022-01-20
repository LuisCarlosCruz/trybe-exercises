const express = require("express");
const error = require("./middlewares/error");
const logger = require("./middlewares/logger");
const productRegister = require("./middlewares/productRegister");
const bodyParser = require("body-parser");
const auth = require("./middlewares/auth");

const app = express();
const port = 3001;

app.use(logger);
app.use(bodyParser.json());

app.get("/", (req, res, next) => {
  return res.status(200).json({ message: "HOME PAGE" });
});

app.post("/product", auth, productRegister);

app.use(error);

app.listen(port, () => {
  console.log(`Aplicação na porta http://localhost:${port}`);
});
