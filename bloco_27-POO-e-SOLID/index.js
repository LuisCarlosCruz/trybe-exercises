"use strict";
class Estudante {
    constructor(nome, matricula, notaProva, notaTrab) {
        this._nome = nome;
        this._matricula = matricula;
        this._notaProva = notaProva;
        this._notaTrab = notaTrab;
    }
    sum() {
        const sumProva = this._notaProva.reduce((a, b) => a + b);
        const sumTrab = this._notaTrab.reduce((a, b) => a + b);
        return `A soma das notas do estudante ${this._nome} é ${sumProva + sumTrab}`;
    }
    average() {
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
    constructor(nome) {
        this._nome = nome;
    }
    get nome() {
        return this._nome;
    }
    set nome(value) {
        if (value.length < 3) {
            throw new Error('O nome deve conter no mínimo 3 caracteres.');
        }
        this._nome = value;
    }
}
class Item {
    constructor(item, preco) {
        this._item = item;
        this._preco = preco;
    }
    get item() {
        return this._item;
    }
    set item(value) {
        if (value.length < 3)
            throw new Error('O nome do item deve conter no mínimo 3 caracteres.');
        this._item = value;
    }
    get price() {
        return this._preco;
    }
    set price(value) {
        if (value < 1)
            throw new Error('O valor deve ser positivo');
        this._preco = value;
    }
}
class Pedido {
    constructor(cliente, itens, pagamento, desconto) {
        this._desconto = 0;
        this._cliente = cliente;
        this._itens = itens;
        this._pagamento = pagamento;
        this._desconto = desconto;
    }
    ;
    get cliente() {
        return this._cliente;
    }
    set cliente(value) {
        this._cliente = value;
    }
    get itens() {
        return this._itens;
    }
    set itens(value) {
        this._itens = value;
    }
    get pagamento() {
        return this._pagamento;
    }
    set pagamento(value) {
        this._pagamento = value;
    }
    get desconto() {
        return this._desconto;
    }
    set desconto(value) {
        if (value < 1)
            throw new Error('O desconto deve ser maior que zero');
        this._desconto = value;
    }
    sum() {
        let soma = 0;
        this._itens.map((item) => soma += item._preco);
        return `O valor total do pedido R$ ${soma}`;
    }
    valorComDesconto() {
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
