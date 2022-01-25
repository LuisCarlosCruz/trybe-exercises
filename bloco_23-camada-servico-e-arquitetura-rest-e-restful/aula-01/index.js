const express = require('express');
const app = express();
const PORT = 3001;

const error = require('./middleware/error');
const createUser = require('./middleware/createUser.middleware');

app.use(express.json());

app.post('/users', createUser);

app.use(error);

app.listen(PORT, () => {
  console.log("App na porta http://localhost:3001");
})