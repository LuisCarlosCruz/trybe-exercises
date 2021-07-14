const assert = require('assert');

function myFizzBuzz(num) {
  if (typeof num !== 'number') return false;
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num;
}
console.log(myFizzBuzz('luis'));
// implemente seus testes aqui

// Faça uma chamada com um número divisível por 3 e 5 e verifique se o retorno é o esperado.
assert.strictEqual(myFizzBuzz(15), 'fizzbuzz', 'error');

// Faça uma chamada com um número divisível por 3 e verifique se o retorno é o esperado
assert.strictEqual(myFizzBuzz(3), 'fizz', 'error2');

// Faça uma chamada com um número divisível por 5 e verifique se o retorno é o esperado.
assert.strictEqual(myFizzBuzz(5), 'buzz', 'error3');

// Faça uma chamada com um número que NÃO é divisível por 3 ou 5 e verifique se o retorno é o esperado.
assert.strictEqual(myFizzBuzz(7), 7, 'error4');

// Faça uma chamada com um parâmetro que  NÃO é um número e verifique se o retorno é o esperado.
assert.strictEqual(myFizzBuzz('7'), false, 'error5');
