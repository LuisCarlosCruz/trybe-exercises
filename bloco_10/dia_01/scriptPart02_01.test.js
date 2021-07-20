const enconde = require('./scriptPart02_01');
const decode = require('./scriptPart02_01');

describe('funções encode() e decode()', () => {

  it('check type encode()', () => {
    expect(typeof enconde).toBe('function');
  });
  it('check type decode()', () => {
    expect(typeof decode).toBe('function');
  });

  it('check if (aeiou) are converted into (12345)', () => {
    expect(enconde('aeiou')).toBeTruthy(12345);
  })

})