export default class Subject {
  private _name: string;
  constructor(name: string) {
    this._name = name;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this.validateName(value);
    this._name = value;
  }

  validateName(value: string) {
    if (value.length < 3) throw new Error('O nome deve ter mais de 3 caracteres');
  }
}