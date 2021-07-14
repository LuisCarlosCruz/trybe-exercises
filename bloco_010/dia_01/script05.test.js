const verif = require('./script05');

const obj1 = {
  title: 'My Title',
  description: 'My Description',
};

const obj2 = {
  description: 'My Description',
  title: 'My Title',
};

const obj3 = {
  title: 'My Different Title',
  description: 'My Description',
};

describe('Objetos', () => {
  it('Compare dois objetos', () => {
    expect(obj3).not.toEqual(obj2);
  });
  it('Compare dois objetos', () => {
    expect(obj1).toEqual(obj2);
  });
});