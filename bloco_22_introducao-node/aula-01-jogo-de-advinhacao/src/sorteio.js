const readline = require('readline-sync');

console.log('Bem vindo ao jogo de advinha!\n');

const numeroEscolhido = readline.questionInt('Digite um número entre 0 e 10: ');
const numeroAleatorio = Math.floor(Math.random() * 10 + 1);

const confere = (numEscolhido, numAleatorio) => {
  if(numEscolhido !== numAleatorio) {
    return console.log(`Opa, não foi dessa vez. O número era ${numeroAleatorio}`);
  }
  return console.log('Parabéns, número correto! :D');
};
confere(numeroEscolhido, numeroAleatorio);

const jogarNovamente = () => {
  const numeroAleatorio = Math.floor(Math.random() * 10 + 1);
  const numeroEscolhido = readline.questionInt('Digite um número entre 0 e 10: ');
  confere(numeroEscolhido, numeroAleatorio);
  const askJogarNovamente = readline.question('Deseja jogar novamente(S/N)?', {
    trueValue: ['s', 'S'],
    falseValue: ['n', 'N']
  });
  if (askJogarNovamente !== true) return console.log('OK, até a próxima!');
  jogarNovamente();
}
jogarNovamente();
