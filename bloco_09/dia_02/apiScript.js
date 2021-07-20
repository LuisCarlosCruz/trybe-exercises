// apiScript.js     
const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };

  fetch(API_URL, myObject)
    .then((response) => response.json().then((result) => creatElement(result)))
};

// Cria elemento e injeta retorno da promessa.
const creatElement = (result) => {
  const parag = document.createElement('p');
  const h2 = document.querySelector('h2');
  parag.innerHTML = result.joke;
  h2.appendChild(parag);
}

window.onload = () => fetchJoke();