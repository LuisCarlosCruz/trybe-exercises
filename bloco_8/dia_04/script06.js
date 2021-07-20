const assert = require('assert');

const expected = [
  { name: 'Pedro Henrique', average: 7.8 },
  { name: 'Miguel', average: 9.2 },
  { name: 'Maria Clara', average: 8.8 },
];



const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

function studentAverage() {

  //  return grades.forEach((element) => {

  //   const sum = element.reduce((acc,curr) => acc + curr,0) / element.length;
    
  //   console.log(sum);
    
  //   return sum;
  // })

  return students.map((student, index) => (
    {
      name: student,
      average: (grades[index].reduce((acc, curr) => acc + curr, 0) / 5),
    }))
  
  } 
console.log(studentAverage());
// assert.deepStrictEqual(studentAverage(), expected);