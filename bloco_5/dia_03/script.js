function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.
// 1-
const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];;

function criaDia () {
  for (let index =0; index < dezDaysList.length; index += 1){
  
    let diaMes = document.createElement('li');
    document.getElementById('days').appendChild(diaMes);
    diaMes.innerHTML = dezDaysList[index];
    diaMes.className = 'day';

    if (dezDaysList[index] == 24 || dezDaysList[index] == 25 || dezDaysList[index] == 31){
      diaMes.classList.add('holiday');
    }

    if (dezDaysList[index] == 4 || dezDaysList[index] == 11 || dezDaysList[index] == 18 || dezDaysList[index] == 25) {
      diaMes.classList.add('Friday');
    }
  }
}
criaDia();

/* 
2- Implemente uma função que receba como parâmetro a string "Feriados" e crie dinamicamente um botão com o nome "Feriados".
Adicione a este botão a ID "btn-holiday" .
Adicione este botão como filho/filha da tag <div> com classe "buttons-container" . */


// function botao (folga) {

//  let botaum = document.createElement(GamepadButton)
//   body.appendChild(botaum);
//   botaum.className
   
// }

// botao('Feriados');



