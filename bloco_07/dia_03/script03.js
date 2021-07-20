const assert = require('assert');

function myRemoveWithoutCopy(arr, item) {
  for (let index = 0, len = arr.length; index < len; index += 1) {
    if (arr[index] === item) {
      arr.splice(index, 1);
      index -= 1;
      len -= 1;
    }
  }
  
  return arr;
}

// implemente seus testes aqui

// Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado.
assert.deepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 3), [1, 2, 4], 'error');

// Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4].
assert.notDeepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 3), [1, 2, 3, 4], 'error2');

// Verifique se o array passado por parâmetro não sofreu alterações
assert.deepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 9,), [1, 2, 3, 4], 'error3');

// Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado
assert.deepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 5,), [1, 2, 3, 4], 'error4');