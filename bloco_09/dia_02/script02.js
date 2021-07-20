// Gera num aleatório
const numRandom = () => {
  let number = (Math.round(Math.random() * 50)) ;
  return number * number;
}

const number =  new Promise ((resolve, reject) => {
  
  let array = [];
  for (let index = 0; index < 10; index +=1) {
    array.push(numRandom());
  }
  const arrayReduce = array.reduce((acc, curr) => acc + curr);

  if (arrayReduce < 8000) {
    const array = [2, 3, 5, 10];
    const arrayMap = array.map((arr) => Math.round(arrayReduce/arr));
    resolve(arrayMap) 
  }
  else {
    reject();
  }
})

  .then((result) => console.log(`${result} Promise resolvida`))
  .catch(() => console.log('É mais de oito mil! Essa promise deve estar quebrada!'))