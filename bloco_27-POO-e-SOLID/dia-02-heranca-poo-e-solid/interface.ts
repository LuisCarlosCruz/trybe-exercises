export default interface IEmployee {
  register: number;
  salary: number;
  admissionDate: Date;
  generateRegistration(): string;
}