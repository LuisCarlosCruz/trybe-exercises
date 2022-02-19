"use strict";
// ENUNS
// Crie uma Enum que represente os dias da semana. Seu valor deve ser número do dia.
var week;
(function (week) {
    week[week["segunda"] = 1] = "segunda";
    week[week["ter\u00E7a"] = 2] = "ter\u00E7a";
    week[week["quarta"] = 3] = "quarta";
    week[week["quinta"] = 4] = "quinta";
    week[week["sexta"] = 5] = "sexta";
    week[week["s\u00E1bado"] = 6] = "s\u00E1bado";
    week[week["domingo"] = 7] = "domingo";
})(week || (week = {}));
console.log(week.sexta);
console.log(week["quinta"]);
console.log(week[2]);
// Crie uma Enum que represente as cores do arco iris. Seu valor deve ser o nome das cores em português.
var arcoIris;
(function (arcoIris) {
    arcoIris["red"] = "vermelho";
    arcoIris["orange"] = "laranja";
    arcoIris["yellow"] = "amarela";
    arcoIris["green"] = "verde";
    arcoIris["blue"] = "azul";
    arcoIris["Indigo"] = "anil";
    arcoIris["Violet"] = "violeta";
})(arcoIris || (arcoIris = {}));
console.log(arcoIris.blue);
console.log(arcoIris["red"]);
// Crie uma Enum que represente as ações: salvar, imprimir, abrir, visualizar e fechar. Seu valor deve ser do tipo inteiro.
var Action;
(function (Action) {
    Action[Action["save"] = 0] = "save";
    Action[Action["print"] = 1] = "print";
    Action[Action["open"] = 2] = "open";
    Action[Action["view"] = 3] = "view";
    Action[Action["close"] = 4] = "close";
})(Action || (Action = {}));
console.log(Action["save"]); // 0
console.log(Action["print"]); // 1
// Crie uma Enum que represente os pontos cardeais: Norte, Leste, Sul e Oeste. Seu valor deve ser a primeira letra do nome do ponto cardial.
var Cardeais;
(function (Cardeais) {
    Cardeais["North"] = "N";
    Cardeais["East"] = "E";
    Cardeais["South"] = "S";
    Cardeais["West"] = "W";
})(Cardeais || (Cardeais = {}));
console.log(Cardeais.East);
console.log(Cardeais["North"]);
function sum(obj) {
    const result = obj.x + obj.y;
    console.log(result);
}
sum({ x: 10, y: 20 });
// Crie um type para um objeto que represente um endereço.
