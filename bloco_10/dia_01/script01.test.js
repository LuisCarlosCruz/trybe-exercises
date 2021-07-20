const sum = require("./script01");

describe('questões do 01 ao 05', () => {

  it('questão 01', ()=> expect(sum(4, 5)).toBe(9));
  it('questão 02', ()=> expect(sum(0, 0)).toBe(0));
  it('questão 03', ()=> expect(() => sum(4, '5')).toThrow());
  it('questão 04', ()=> expect(() => sum(4, '5')).toThrow(/parameters must be numbers/));
  
});