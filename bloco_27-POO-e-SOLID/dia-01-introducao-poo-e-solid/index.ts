class Estudante {
  _nome: string;
  _matricula: number;
  _notaProva: number[];
  _notaTrab: number[];
  constructor(
    nome: string,
    matricula: number,
    notaProva: number[],
    notaTrab: number[]) {
      this._nome = nome;
      this._matricula = matricula;
      this._notaProva = notaProva;
      this._notaTrab = notaTrab;
  }

  sum(){
    const sumProva = this._notaProva.reduce((a, b) => a + b);
    const sumTrab = this._notaTrab.reduce((a, b) => a + b);
    return `A soma das notas do estudante ${this._nome} é ${sumProva + sumTrab}`;
  }

  average(){
    const sumProva = this._notaProva.reduce((a, b) => a + b);
    const sumTrab = this._notaTrab.reduce((a, b) => a + b);
    const media = (sumProva + sumTrab) / (this._notaProva.length + this._notaTrab.length);
    return `A média do estudante ${this._nome} é ${media}`;
  }
}

const estudante1 = new Estudante('luis', 1234, [5.3, 8], [2.8, 4]);
console.log(estudante1.sum());
console.log(estudante1.average());

// 3
class Cliente {
  _nome: string;
  constructor(nome: string) {
    this._nome = nome;
  }

  get nome(): string {
    return this._nome;
  }

  set nome(value: string) {
    if (value.length < 3) {
      throw new Error('O nome deve conter no mínimo 3 caracteres.');
    }
    this._nome = value;
  }
}

class Item {
  _item: string;
  _preco: number;
  constructor(item: string, preco: number) {
    this._item = item;
    this._preco = preco;
  }

  get item(): string {
    return this._item;
  }

  set item(value: string) {
    if (value.length < 3) throw new Error('O nome do item deve conter no mínimo 3 caracteres.');
    this._item = value;
  }

  get price(): number {
    return this._preco;
  }

  set price(value: number) {
    if (value < 1) throw new Error('O valor deve ser positivo');
    this._preco = value;
  }
}

class Pedido {
  _cliente: Cliente;;
  _itens: Item[];
  _pagamento: string;
  _desconto: number = 0;
  constructor(cliente: Cliente, itens: Item[], pagamento: string, desconto: number) {
    this._cliente = cliente;
    this._itens = itens;
    this._pagamento = pagamento;
    this._desconto = desconto;
  }

  get cliente(): Cliente {
    return this._cliente;
  }

  set cliente(value: Cliente) {
    this._cliente = value;
  }

  get itens(): Item[] {
    return this._itens;
  }

  set itens(value: Item[]) {
    this._itens = value;
  }

  get pagamento(): string {
    return this._pagamento;
  }

  set pagamento(value: string) {
    this._pagamento = value;
  }

  get desconto(): number {
    return this._desconto;
  }

  set desconto(value: number) {
    if (value < 1) throw new Error('O desconto deve ser maior que zero');
    this._desconto = value;
  }

  sum(): string{
    let soma = 0;
    this._itens.map((item) => soma += item._preco);
    return `O valor total do pedido R$ ${soma}`;
  }

  valorComDesconto(): string {
    let soma = 0;
    this._itens.map((item) => soma += item._preco);
    const desc = soma * this._desconto;
    const final = soma - desc;
    return `O valor do pedido com desconto de ${this._desconto * 100}% é de R$ ${final}`;
  }
}

const client = new Cliente('luis');
const coxinha = new Item('coxinha', 6);
const pastel = new Item('pastel', 4);
const caldoDeCana = new Item('caldoDeCana', 3);

const pedido = new Pedido(client, [coxinha, pastel, caldoDeCana], 'cartao', 0.3);

console.log(pedido);

// 4
console.log(pedido.sum());
console.log(pedido.valorComDesconto());
