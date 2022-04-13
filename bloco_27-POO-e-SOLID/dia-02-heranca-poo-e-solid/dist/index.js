"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const person_1 = __importDefault(require("./person"));
const student_1 = __importDefault(require("./student"));
const person = new person_1.default('Maria', new Date('1980/01/25'));
console.log(person.name);
console.log(person.birthDate);
const student = new student_1.default('Maria', new Date('1980/01/25'));
console.log(student.RandomEnrollment());
console.log(student.worksGrades = [1, 3]);
console.log(student.averageExamsGrade([5, 7]));
console.log(student.averageWorksGrades([2, 4]));
