const readline = require("readline-sync");

const arquivos = {
  1: "listaNomesEstados.js",
  2: "listaCapitaisEstados.js",
  3: "listaSiglaEstados.js",
};

console.table(arquivos);

const ask = readline.questionInt("Digite o index do arquivo p/ executar? \n");

switch (ask) {
  case 1:
    const { listaNomesEstados } = require("./listaNomesEstados");
    console.log(listaNomesEstados);
    break;
  case 2:
    const { listaCapitalEstados } = require("./listaCapitaisEstados");
    console.log(listaCapitalEstados);
    break;
  case 3:
    const { listaSiglaEstados } = require("./listaSiglaEstados");
    console.log(listaSiglaEstados);
    break;
  default:
    console.log("Arquivo não encontrado!");
}
