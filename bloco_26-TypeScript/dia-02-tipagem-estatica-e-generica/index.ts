// ENUNS

// Crie uma Enum que represente os dias da semana. Seu valor deve ser número do dia.
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


// Crie uma Enum que represente as cores do arco iris. Seu valor deve ser o nome das cores em português.
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


// Crie uma Enum que represente as ações: salvar, imprimir, abrir, visualizar e fechar. Seu valor deve ser do tipo inteiro.
enum Action {
  save,
  print,
  open,
  view,
  close,
}

console.log(Action["save"]); // 0
console.log(Action["print"]); // 1


// Crie uma Enum que represente os pontos cardeais: Norte, Leste, Sul e Oeste. Seu valor deve ser a primeira letra do nome do ponto cardial.
enum Cardeais {
  North = "N",
  East = "E",
  South = "S",
  West = "W",
}

console.log(Cardeais.East);
console.log(Cardeais["North"]);

// -------------------------------------------------------------------------


// TYPE ALIASES

// Crie um type que represente uma função que recebe 2 valores numéricos e retorna a soma dos dois.
type numbers = {
  x: number,
  y: number,
}

function sum (obj: numbers) {
  const result = obj.x + obj.y;
  
  console.log(result);
}

sum({x: 10, y: 20});


// Crie um type para um objeto que represente um endereço.
type address = {
  number: number;
  district: string;
  city: string;
  state: string;
}

// -------------------------------------------------------------------------


// TYPE UNIONS

// Crie um type union que represente os estados físicos da matéria: líquido, sólido ou gasoso.
type states = "liquid" | "solid" | "gaseous";


// Crie um type union que represente o documento identificador de uma pessoa que pode receber valores numéricos ou texto. Ex: “123.567.890-12” ou 123456789012.
type doc = string | number;


// Crie um type union que represente sistemas operacionais: linux, mac os ou windows.
type SO = "linux" | "mac" | "window";


// Crie um type union que represente as vogais do alfabeto.
type vogais = "a" | "e" | "i" | "o" | "u";


// -------------------------------------------------------------------------

// CLASSES

// Crie uma classe cujo objeto represente um Cachorro.
interface Dog {
  _name: string;
  _color: string;
  _age: number;
  feature(): void;
}

class Dog {
  constructor(name: string, color: string, age: number) {
    this._name = name;
    this._color = color;
    this._age = age;
  }

  feature(): void {
    console.log("Au Au");
  }
}

const animal = new Dog("Bob", "black", 3);
console.log(animal);

const speak = animal.feature();


// -------------------------------------------------------------------------

// INTERFACE


// Crie uma interface cujo objeto represente um Automóvel.
interface Automovel {
  marca: string;
  modelo: string;
  ano: number;
  vendido: boolean;
  status(): string;
}


// Crie uma interface cujo objeto represente um Felino.
interface Felino {
  name: string;
  especie: string;
  genero: string;
  vivo: boolean;
  nascimento: number;
}


// Crie uma interface cujo objeto represente uma Aeronave.
interface Aeronave {
  modelo: string;
  porte: string;
  rodas: number;
  ano: number;
  tipoVoo(): string;
}
