const getUserName = require ('./script02');

describe('Function getUserName():', () => {
  expect.assertions(1);
  
  it('result function getUserName():',  async () => {
    const get = await getUserName(4);
      expect(get).toEqual('Mark');
    });
  });