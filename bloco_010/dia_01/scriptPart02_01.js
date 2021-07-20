function enconde(stringReceb) {

  let segundaString = '';

  for (let index = 0; index < stringReceb.length; index += 1) {
    
    let posicao = stringReceb[index];
  
    if (posicao === 'a') {
      segundaString += '1';
    } else if (posicao === 'e') {
      segundaString += '2';
    } else if (posicao === 'i') {
      segundaString += '3';
    } else if (posicao === 'o') {
      segundaString += '4';
    } else if (posicao === 'u') {
      segundaString += '5';
    } else {
      segundaString += stringReceb[index];
    }
  }
  return segundaString;
};

function decode() {

  let stringDecode = '';

  for (let index = 0; index < stringRecebDecode.length; index += 1) {

    let posicaos = stringRecebDecode[index];

    if (posicaos === '1') {
      stringDecode += 'a';
    } else if (posicaos === '2') {
      stringDecode += 'e';
    } else if (posicaos === '3') {
      stringDecode += 'i';
    } else if (posicaos === '4') {
      stringDecode += 'o';
    } else if (posicaos === '5') {
      stringDecode += 'u';
    } else {
      stringDecode += stringRecebDecode[index];
    }
  }
  return stringDecode;

};
module.exports = enconde;
module.exports = decode;