const { expect } = require('chai');
const { verificaNumero } = require('../verificaNumero');

describe('Verifica parâmetro', () => {

  describe('Verifica número', () => {
    it('É um número positivo', () => {
      const numPositivo = verificaNumero(2);
      expect(numPositivo).to.be.equal('positivo');
    });

    it('É um número negativo', () => {
      const numNegativo = verificaNumero(-2);
      expect(numNegativo).to.be.equal('negativo');
    });

    it('É um número neutro', () => {
      const numNeutro = verificaNumero(0);
      expect(numNeutro).to.be.equal('neutro');
    });
  });
});