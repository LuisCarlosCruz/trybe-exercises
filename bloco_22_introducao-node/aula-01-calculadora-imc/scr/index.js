const {nome, altura, peso} = require('./questions.js');

// calcula imc  imc = kg / m²
const imc = peso / (altura * 2);

// imprime
console.log(`${nome} seu IMC é ${imc}`);
