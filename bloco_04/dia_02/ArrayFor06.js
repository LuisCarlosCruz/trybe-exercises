
// Descubra quantos valores ímpares existem no array e imprima o 
// resultado. Caso não exista nenhum, imprima a mensagem: 
// "nenhum valor ímpar encontrado";

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let vari = 0;
let impares = 0;

  for (let index =0; index < numbers.length; index +=1 ) {
    vari = numbers[index];
    
      if (vari % 2 != 0) {
        impares += 1;            
      }
      else {
      }   
  }

  console.log('A quantidade de nº ímpares é: ' + impares);