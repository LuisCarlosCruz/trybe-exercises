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
  test('Compare dois objetos', () => {
    expect(verif(obj1, obj2)).toEqual(true);
  });
});