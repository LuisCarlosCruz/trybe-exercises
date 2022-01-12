const fs = require("fs/promises");

const escreveArquivo = async () => {
  try {
    const escreve = await fs.writeFile("teste.txt", "YURAO");
    return escreve;
  } catch {
    return null;
  }
};

module.exports = { escreveArquivo };
