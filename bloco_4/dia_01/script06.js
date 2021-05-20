let plv = 'piãO';

  
  if (plv.toLowerCase() === 'cavalo') {
    console.log(' Cavalo: Se movimentam em L.');
  } 
  else if (plv.toLowerCase() === 'torre') {
    console.log(' Torre: Se movimentam em linha reta vertical ou horizontal.');
  }
  else if (plv.toLowerCase() === 'bispo') { 
    console.log(' Bispo: Se movimentam em diagonal.');
  }
  else if (plv.toLowerCase() === 'rainha') { 
    console.log(' Rainha: Se movimentam em qualquer lado.');
  }
  else if (plv.toLowerCase() === 'rei') { 
    console.log(' Rei: Se movimentam em qualquer direção uma casa.');
  }
  else if (plv.toLowerCase() === 'pião') { 
    console.log(' Pião: Se movimentam p/ frente.');
  }
  else {
    console.log('Você deve jogar dama.');
  }


/*Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com 
letras minúsculas, sem aumentar a quantidade de condicionais.
Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case).
Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.
Exemplo: bishop (bispo) -> diagonals (diagonais)*/ 