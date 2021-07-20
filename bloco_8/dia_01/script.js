// Exemplo de Introdução a Higher Order Functions

const wakeUp = () => 'Acordando!!';
const breakfast = () => 'Bora tomar café!!';
const sleep = () => 'Partiu dormir!!';

const doingThings = (callback) => {
  console.log(callback());
};

doingThings(wakeUp);
doingThings(breakfast);
doingThings(sleep);

/* ------------------QUESTÃO 01----------------------- */

const people = (fullName) => {
  const email = fullName.toLowerCase().split(' ').join('_');
  return { fullName, email:`${email}@trybe.com`};
};

const newEmployees = (callback) => {
  const employees = {
    id1: callback ('Pedro Guerra'),
    id2: callback ('Luiza Drumond'),
    id3: callback ('Carla Paiva'),
  };
  return employees;
};
console.log(newEmployees(people));

/* ------------------QUESTÃO 02----------------------- */

const meuNum = () => { 
  const num = Math.random() * 5;
  return Math.ceil(num);
};
const luck = () => { 
  const num = Math.random() * 5;
  return Math.ceil(num);
};
const bet = (func1, func2) => {
  if (func1 === func2 ) { return 'Parabéns você ganhou'}
  return 'Tente novamente';
};
console.log(bet(meuNum(),luck()));

/* ------------------QUESTÃO 03----------------------- */

const rightAnswers = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const studentAnswers = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const verification = (gabarito, estudante) => {
  let pont = 0;
  for (let index = 0; index < gabarito.length; index += 1) {
    if (gabarito[index] === estudante[index]) { pont += 1; }
    else pont -= 0.5;
  } 
  return pont;
};
console.log(verification(rightAnswers,studentAnswers));