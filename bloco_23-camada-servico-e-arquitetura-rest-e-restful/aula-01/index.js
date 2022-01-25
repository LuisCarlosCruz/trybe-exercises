const express = require('express');
const app = express();
const PORT = 3001;

const error = require('./middleware/error');
const createUser = require('./middleware/createUser.middleware');
const getUserId = require('./middleware/getUserId.middleware');
const editarUserId = require('./middleware/editarUserid.middleware');

app.use(express.json());

app.post('/users', createUser);

app.get('/users/:id', getUserId);

app.put('/users/:id', editarUserId);

app.use(error);

app.listen(PORT, () => {
  console.log("App na porta http://localhost:3001");
})