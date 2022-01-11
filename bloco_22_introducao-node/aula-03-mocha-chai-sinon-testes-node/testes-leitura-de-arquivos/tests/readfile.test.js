const { expect, assert } = require('chai');
const readfile = require('../readfile');
const fs = require('fs/promises');
const sinon = require('sinon');

describe('Lê um arquivo', () => {

  // comportamento 1
  describe('arquivo é lido com sucesso', () => {

    // antes dos testes
    before(() => {
      sinon.stub(fs, 'readFile').resolves('Frodo');
    });
    // depois dos testes
    after(() => {
      fs.readFile.restore();
    });
 
    describe('o output', () => {
      it('é uma string', async () => { 
        const output = await readfile('teste.txt');
        expect(output).to.be.a('string');
      });


      it('é igual ao conteúdo do arquivo', async () => { 
        const output = await readfile('teste.txt');
        expect(output).to.be.equal('Frodo'); 
      });
    });
  });

  // comportamento 2
  describe('erro na leitura do arquivo', () => {

    before(() => {
      sinon.stub(fs, 'readFile').rejects('Erro na leitura');
    });

    after(() => {
      fs.readFile.restore();
    });

    describe('o output', () => {
      it('é null', async () => { 
        const output = await readfile('teste.txt');
        expect(output).to.be.null;
      });
    });
  });

});