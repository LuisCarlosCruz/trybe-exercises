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

// QUESTÃO 01
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

// QUESTÃO 02

function criaBotao (holi) {

 let botaum = document.createElement('button');
  document.querySelector('.buttons-container').appendChild(botaum);
  botaum.innerText = holi;
  botaum.id = 'btn-holiday';  

// QUESTAO 03
                /* botaum.addEventListener('click', function() {
                  let holidays = document.querySelectorAll('.holiday');
                  
                  if (holidays.contains('holiday')){
                    
                      holidays.style.backgroundColor = "red";

                    if(holidays){
                      holidays.style.backgroundColor = "rgb(238,238,238)";
                    }

                  }
                
                } ); */
}
criaBotao('Feriados');

// QUESTÃO 03

/* Implemente uma função que adicione ao botão "Feriados" um evento de "click" que muda a cor de fundo dos dias que possuem a classe "holiday". É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial com a cor "rgb(238,238,238)" . */