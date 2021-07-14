/* ---------------------------PARTE 01--------------------------------- */
/*  QUESTÃO 01 */
const testingScope = (escopo) => { 
  if (escopo === true) {
    let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    return `${ifScope} ótimo, fui utilizada no escopo !`;
  } 
  else {
    return `Não devo ser utilizada fora meu escopo (else)`;
   
  }
}
console.log(testingScope(false));

/*  QUESTÃO 02 */
const oddsAndEvens = [13, 3, 4, 10, 7, 2];

oddsAndEvens.sort(function(a, b) {
  return a - b;
});
console.log(oddsAndEvens);

/* questão 01 com ternary operador & arrow function*/
const testingScope = (escopo) => escopo === true ? 
    `Não devo ser utilizada fora do meu escopo (if), ótimo, fui utilizada no escopo !` :
    `Não devo ser utilizada fora meu escopo (else)`;

console.log(testingScope(true));

/* ---------------------------PARTE 02--------------------------------- */

/*  QUESTÃO 01 */

// formula fatorial  n! = n . (n – 1) . (n – 2) . (n – 3)!

let numbers = (num) => num = num * (num -1) * (num -2) * (num -3);

console.log (numbers(5));

/*  QUESTÃO 02 */

const arrayWord = ('Quem descobriu o Brasil?').split(' ');
 /* .split()  transf uma string em um array de substrings.
 De acordo com a condição entre paranteses. */

let maiorWord = '';
for (index in arrayWord) {

  if (arrayWord[index].length > maiorWord.length) {
   maiorWord = arrayWord[index];
  }
}
console.log(maiorWord);


/*  QUESTÃO 03 */
            let x = '';
            const frase = ('existe ameixa').split('x');

              for (index in frase) {

              x += `${frase[index]}`;
              
            }
            console.log(x);