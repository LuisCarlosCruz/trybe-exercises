const myRemove = require('./script02');

describe('Função myRemove()', () => {

  it('se myRemove([1, 2, 3, 4], 3) retorna o array esperado', () => {
   expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4])
  })

  it('se myRemove([1, 2, 3, 4], 3) NÃO retorna o array esperado', () => {
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4])
  })

  it('se o array passado por parâmetro NÃO sofreu alterações', () => {
    expect(myRemove([1, 2, 3, 4])).toEqual([1, 2, 3, 4])
  })

  it('se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado', () => {
    expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  })
});