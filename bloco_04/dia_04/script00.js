
let atleta = {
  name : 'Marta',
  lastName : 'Silva',
  age : 34,
  medals : { golden: 2, Silver: 3},
  bestInTheWorld : [2006, 2007, 2008, 2009, 2010, 2018]
};
  atleta['fullName'] = atleta.name + ' ' + atleta.lastName;


  console.log('A jogadora ' + atleta.name + ' ' + atleta.lastName + ' tem ' + atleta.age + ' anos.');

  console.log('A jogadora ' + atleta.fullName + 'foi eleita a melhor do mundo por 6 vezes.');

  console.log('A jogadora possui ' + atleta.medals.golden + ' medalhas de ouro e ' + atleta.medals.Silver + ' de prata.');

  console.table(atleta);