// Crie uma Enum que represente os dias da semana.
// Seu valor deve ser número do dia.
enum week {
  segunda = 1,
  terça,
  quarta,
  quinta,
  sexta,
  sábado,
  domingo,
}

console.log(week.sexta);
console.log(week["quinta"]);
console.log(week[2]);


// Crie uma Enum que represente as cores do arco iris.
// Seu valor deve ser o nome das cores em português.

enum arcoIris {
  red = "vermelho",
  orange = "laranja",
  yellow = "amarela",
  green = "verde",
  blue = "azul",
  Indigo = "anil",
  Violet = "violeta",
}

console.log(arcoIris.blue);
console.log(arcoIris["red"]);


// Crie uma Enum que represente as ações: salvar, imprimir, abrir, visualizar e fechar.
// Seu valor deve ser do tipo inteiro.

enum Action {
  save,
  print,
  open,
  view,
  close,
}

console.log(Action["save"]); // 0
console.log(Action["print"]); // 1


// Crie uma Enum que represente os pontos cardeais: Norte, Leste, Sul e Oeste.
// Seu valor deve ser a primeira letra do nome do ponto cardial.

enum Cardeais {
  North = "N",
  East = "E",
  South = "S",
  West = "W",
}

console.log(Cardeais.East);
console.log(Cardeais["North"]);
