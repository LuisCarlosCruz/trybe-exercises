const assert = require('assert');

function myRemove(arr, item) {
  let newArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    if (item !== arr[index]) {
      newArr.push(arr[index]);
    }
  }
  return newArr;
}

// implemente seus testes aqui

// Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado.
assert.deepStrictEqual(myRemove([1, 2, 3, 4], 3), [1, 2, 4], 'error');

// Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4].
assert.notDeepStrictEqual(myRemove([1, 2, 3, 4], 3), [1, 2, 3, 4], 'error2');

// Verifique se o array passado por parâmetro não sofreu alterações
assert.deepStrictEqual(myRemove([1, 2, 3, 4], 9,), [1, 2, 3, 4], 'error3');

// Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado
assert.deepStrictEqual(myRemove([1, 2, 3, 4], 5,), [1, 2, 3, 4], 'error4');

