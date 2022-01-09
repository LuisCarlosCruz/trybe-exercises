const { usdToBrl } = require('./convert');
const { readlineSync } = require('./readLine');

const userName = readlineSync.question('Qual o seu nome ? ');

const usd = 10;

const brl = usdToBrl(usd);

console.log(`${userName}, sabia que 10 dolares valem: R$${brl} ?!`);
