const readlineSync = require('readline-sync');

const distancia = readlineSync.questionInt('Qual a distância percorrida(m)? ');

const tempo = readlineSync.questionInt('Em quanto tempo(s)? ');

module.exports = { distancia, tempo };
