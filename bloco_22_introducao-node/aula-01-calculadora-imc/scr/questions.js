const readLine = require('readline-sync');

// perg nome
const nome = readLine.question('Qual o seu nome? ');

//perg altura
const altura = readLine.questionFloat('Qual a sua altura (ex.: 1.75m)? ');

// perg peso kg
const peso = readLine.questionFloat('Qual o seu peso? ');

module.exports = { nome, altura, peso };