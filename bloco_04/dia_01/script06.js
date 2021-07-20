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