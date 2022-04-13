import Person from "./person";
import objectHash from "object-hash";

export default class Student extends Person{
  private _enrollment: string = String();   //*matricula
  private _examsGrades: number[] = [];      //*notas de provas
  private _worksGrades: number[] = [];      //*notas de trabalhos
  
  constructor(name: string, birthDate: Date) {
    super(name, birthDate);
  }

  RandomEnrollment(): string {
    const hash = objectHash.sha1(super.name);
    return hash;
  }

  SumGrades(valueExams: number[], valueWorks: number[]) {
    this._examsGrades = [...valueExams];
    this._worksGrades = [...valueWorks];
    const sumExams = this._examsGrades.reduce((a, b) => a + b);
    const sumWorks = this._worksGrades.reduce((a, b) => a + b);
    const sumGrades = sumExams + sumWorks;
    return `A soma de todas as notas do estudante ${super.name} é: ${[sumGrades]}`;
  }

  averageWorksGrades(valueWorks: number[]) {
    if (valueWorks.length > 2) throw new Error('O estudante só pode possuir 2 notas');
    this._worksGrades = valueWorks;
    const averageWorks = (this._worksGrades.reduce((a, b) => a + b)) / this._worksGrades.length;
    return `A média dos trabalhos é: ${averageWorks}`;
  }

  averageExamsGrade(valueExams: number[]) {
    if (valueExams.length > 4) throw new Error('O estudante só pode possuir 4 notas');
    this._examsGrades = valueExams;
    const averageExams = (this._examsGrades.reduce((a, b) => a + b)) / this._examsGrades.length;
    return `A média das provas é ${averageExams}`;
  }

  set worksGrades(value: number[]) {
    if (value.length > 2) throw new Error('O estudante só pode possuir 2 notas de trabalhos.')
    this._worksGrades = value;
  }
}