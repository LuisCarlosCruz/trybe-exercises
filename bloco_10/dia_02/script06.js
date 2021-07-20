// const Animals = [
//   { name: 'Dorminhoco', age: 1, type: 'Dog' },
//   { name: 'Soneca', age: 2, type: 'Dog' },
//   { name: 'Preguiça', age: 5, type: 'Cat' },
// ];

// const findAnimalsByName = (name) => (
//   new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const animal = Animals.fild((animal) => animal.name === name);
//       if (animal) {
//         return resolve(animal);
//       };
//       return reject({ error: 'Não possui animal com esse nome.' });
//     }, 100);
//   })
// );

// const getListAnimal = (name) => (
//   findAnimalsByName(name).then(animal => animal);
// );

// module.exports = getListAnimal;