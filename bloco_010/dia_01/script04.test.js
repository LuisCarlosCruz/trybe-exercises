const myFizzBuzz = require('./script04');

describe('função myFizzBuzz()', () => {

  it('divisível por 3 e 5 com retorno esperado', () => {
    expect(myFizzBuzz(15)).toEqual('fizzbuzz');
  })

  it('divisível por 3 com retorno esperado', () => {
    expect(myFizzBuzz(9)).toEqual('fizz');
  })

  it('divisível por 5 com retorno esperado', () => {
    expect(myFizzBuzz(20)).toEqual('buzz');
  })

  it('NÃO é divisível por 3 ou 5 com retorno esperado', () => {
    expect(myFizzBuzz(11)).toBe(11);
  })

  it('NÃO é um número e verifique se o retorno é o esperado', () => {
    expect(myFizzBuzz('a')).toBe(false);
  })

})