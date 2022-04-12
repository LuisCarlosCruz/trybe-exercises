export default class Person {
  private _name: string;
  private _birthDate: Date;
  constructor(name: string, birthDate: Date) { 
    this._name = name;
    this._birthDate = birthDate;
  }

  get name(): string{
    return this._name;
  }

  set name(value: string) {
    this.validateName(value);
    this._name = value;
  }

  get birthDate(): Date {
    return this._birthDate;
  }

  set birthDate(value: Date) {
    this.validateBirtDate(value);
    this._birthDate = value;
  }

  private validateName(value: string) {
    if (value.length < 3) throw new Error('O nome deve ser maior que 3 caracteres');
  }

  private validateBirtDate(value: Date) {
    if (value.getTime() > new Date().getTime()) throw new Error('A data de nascimento não pode ser uma data no futuro.');
  }
}

const person = new Person('Maria', new Date('1980/01/25'));

console.log(person.name);
console.log(person.birthDate);
