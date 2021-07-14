const sum = require("./script01");

describe('questões do 01 ao 05', () => {

  test('questão 01', ()=> expect(sum(4, 5)).toBe(9));
  test('questão 02', ()=> expect(sum(0, 0)).toBe(0));
  test('questão 03', ()=> expect(() => sum(4, '5')).toThrow());
  test('questão 04', ()=> expect(() => sum(4, '5')).toThrow(/parameters must be numbers/));
  
});