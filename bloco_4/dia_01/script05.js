let ang1 = 50;
let ang2 = 50;
let ang3 = 30;

let total = ang1 + ang2 + ang3;
if (ang1 < 0 || ang2 < 0 || ang3 < 0){
     console.log ('erro');
  }  else if ( total <= 180) {
      console.log ('true');
  } else {
  console.log('false');
  }
  





/*Faça um programa que defina três variáveis com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false , caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.*/