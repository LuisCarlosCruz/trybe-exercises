"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const person_1 = __importDefault(require("./person"));
const object_hash_1 = __importDefault(require("object-hash"));
class Student extends person_1.default {
    constructor(name, birthDate) {
        super(name, birthDate);
        this._enrollment = String(); //*matricula
        this._examsGrades = []; //*notas de provas
        this._worksGrades = []; //*notas de trabalhos
    }
    RandomEnrollment() {
        const hash = object_hash_1.default.sha1(super.name);
        return hash;
    }
    SumGrades(valueExams, valueWorks) {
        this._examsGrades = [...valueExams];
        this._worksGrades = [...valueWorks];
        const sumExams = this._examsGrades.reduce((a, b) => a + b);
        const sumWorks = this._worksGrades.reduce((a, b) => a + b);
        const sumGrades = sumExams + sumWorks;
        return `A soma de todas as notas do estudante ${super.name} é: ${[sumGrades]}`;
    }
    averageWorksGrades(valueWorks) {
        if (valueWorks.length > 2)
            throw new Error('O estudante só pode possuir 2 notas');
        this._worksGrades = valueWorks;
        const averageWorks = (this._worksGrades.reduce((a, b) => a + b)) / this._worksGrades.length;
        return `A média dos trabalhos é: ${averageWorks}`;
    }
    averageExamsGrade(valueExams) {
        if (valueExams.length > 4)
            throw new Error('O estudante só pode possuir 4 notas');
        this._examsGrades = valueExams;
        const averageExams = (this._examsGrades.reduce((a, b) => a + b)) / this._examsGrades.length;
        return `A média das provas é ${averageExams}`;
    }
    set worksGrades(value) {
        if (value.length > 2)
            throw new Error('O estudante só pode possuir 2 notas de trabalhos.');
        this._worksGrades = value;
    }
}
exports.default = Student;
