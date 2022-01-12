const fs = require("fs/promises");
const sinon = require("sinon");
const { expect } = require("chai");
const { escreveArquivo } = require("../escreveArquivo");

describe("Função fs", () => {
  describe("Sucesso", () => {
    before(() => {
      sinon.stub(fs, "writeFile").resolves("ok");
    });

    after(() => {
      fs.writeFile.restore();
    });

    describe("Escreve no arquivo", () => {
      it("escreveu no arquivo", async () => {
        const escreve = await escreveArquivo("teste.txt", "LUIS");

        expect(escreve).to.be.equal("ok");
      });
    });
  });

  describe("Reject", () => {
    before(() => {
      sinon.stub(fs, "writeFile").rejects("Erro na leitura");
    });

    after(() => {
      fs.writeFile.restore();
    });

    describe("Erro na escrita do arquivo", () => {
      it("Não escreveu no arquivo", async () => {
        const escreve = await escreveArquivo("teste.txt", "LUIS");

        expect(escreve).to.be.null;
      });
    });
  });
});
