const myFizzBuzz = require('./script04');

describe('função myFizzBuzz()', () => {

  test('divisível por 3 e 5 com retorno esperado', () => {
    expect(myFizzBuzz(15)).toEqual('fizzbuzz');
  })

  test('divisível por 3 com retorno esperado', () => {
    expect(myFizzBuzz(9)).toEqual('fizz');
  })

  test('divisível por 5 com retorno esperado', () => {
    expect(myFizzBuzz(20)).toEqual('buzz');
  })

  test('NÃO é divisível por 3 ou 5 com retorno esperado', () => {
    expect(myFizzBuzz(11)).toBe(11);
  })

  test('NÃO é um número e verifique se o retorno é o esperado', () => {
    expect(myFizzBuzz('a')).toBe(false);
  })

})