

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let coletor = 0;



  for (let index = 0; index < numbers.length; index += 1) {
   
    if (numbers[index] >= coletor){
      coletor = numbers[index];
    }
    else{
    }
    
  }
  console.log('O maior nº do array é: ' + coletor);