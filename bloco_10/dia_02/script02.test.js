const getUserName = require ('./script02');

describe('getUserName() - promise:', () => { 
  describe('Function resolve getUserName(): ', () => {
    
    it('result function getUserName():', () => {
      expect.assertions(1);
      return getUserName(4).then((result) => {
        expect(result).toEqual('Mark');
      });
    });
  });

  describe('Function reject getUserName(): ', () => {
    it('user id does not exists:', () => {
      expect.assertions(1);
      return getUserName(6).catch((error) => {
        expect(error).toEqual({error: 'User with ' + 6 + ' not found.'});
      });
    });
  });
});

