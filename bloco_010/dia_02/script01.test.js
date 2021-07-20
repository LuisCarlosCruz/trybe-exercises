const uppercase = require('./script01');

describe('Function uppercase:', () => {
  it('check function uppercase', () => {
    uppercase('luis', (call) => {
        expect(call).toBe('LUIS');
    });
  });
});