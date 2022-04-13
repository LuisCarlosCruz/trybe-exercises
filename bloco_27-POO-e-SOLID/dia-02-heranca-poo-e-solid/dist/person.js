"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Person {
    constructor(name, birthDate) {
        this._name = name;
        this._birthDate = birthDate;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this.validateName(value);
        this._name = value;
    }
    get birthDate() {
        return this._birthDate;
    }
    set birthDate(value) {
        this.validateBirtDate(value);
        this._birthDate = value;
    }
    validateName(value) {
        if (value.length < 3)
            throw new Error('O nome deve ser maior que 3 caracteres');
    }
    validateBirtDate(value) {
        if (value.getTime() > new Date().getTime())
            throw new Error('A data de nascimento não pode ser uma data no futuro.');
    }
}
exports.default = Person;
