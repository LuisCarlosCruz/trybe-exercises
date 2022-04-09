"use strict";
// * dois métodos: um que calcula a soma das notas da pessoa estudante e outro que calcula a média das notas da pessoa estudante.
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
        const averageProva = this._notaProva.reduce((a, b) => a + b);
        const averageTrab = this._notaTrab.reduce((a, b) => a + b);
        const media = averageProva + averageTrab / (this._notaProva.length + this._notaTrab.length);
        return `A média do estudante ${this._nome} é ${media}`;
    }
}
const estudante1 = new Estudante('luis', 1234, [3, 5], [1, 2]);
console.log(estudante1.sum());
console.log(estudante1.average());
