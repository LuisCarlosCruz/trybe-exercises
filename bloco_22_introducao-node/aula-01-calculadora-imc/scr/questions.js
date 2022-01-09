const readLine = require('readline-sync');

// perg nome
const nome = readLine.question('Qual o seu nome? ');

//perg altura
const altura = readLine.question('Qual a sua altura(m) ? ');

// perg peso kg
const peso = readLine.question('Qual o seu peso? ');

module.exports = { nome, altura, peso };