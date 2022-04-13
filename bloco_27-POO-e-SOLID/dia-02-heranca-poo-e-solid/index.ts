import Person from "./person";
import Student from "./student";

const person = new Person('Maria', new Date('1980/01/25'));

console.log(person.name);
console.log(person.birthDate);

const student = new Student('Maria', new Date('1980/01/25'));

console.log(student.RandomEnrollment());
console.log(student.worksGrades = [1, 3]);
console.log(student.averageExamsGrade([5, 7]));
console.log(student.averageWorksGrades([2, 4]));









