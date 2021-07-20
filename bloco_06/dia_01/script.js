// PARTE 01
// Injeta os estados e seus valores
let estados = ['Acre','Alagoas','Amapá','Amazonas','Bahia','Ceará','Distrito Federal','Espírito Santo','Goiás','Maranhão','Mato Grosso','Mato Grosso do Sul','Minas Gerais','Pará','Paraíba','Paraná','Pernambuco','Piauí','Rio de Janeiro','Rio Grande do Norte','Rio Grande do Sul','Rondônia','Roraima','Santa Catarina','São Paulo','Sergipe','Tocantins'];

let value = ['AC','AL','AP','AM','BA','CE','DF','ES','GO','MA','MT','MS','MG','PA','PB','PR','PE','PI','RJ','RN','RS','RO','RR','SC','SP','SE','TO']

let select = document.querySelector('#estado');

for (let index = 0; index < estados.length; index += 1) {
  let estado = document.createElement('option');
  select.appendChild(estado);
  estado.innerHTML = estados[index];
  estado.value = value[index];
  // console.log(estado);
}
// -----------------------------------------------------------------------------
// PARTE 02
// Validação da data de início

let dia = document.getElementById('dia');
let mes = document.getElementById('mes');
let ano = document.getElementById('ano');

let botao = document.getElementById('botao');
botao.addEventListener('click', function () {

  // console.log(botao);
  if (dia.value == null || dia.value <= 0 || dia.value > 31) {
    alert('dia inválido');
  }
  if (mes.value == null || mes.value <= 0 || mes.value > 12) {
    alert('mês inválido');
  }
  if (ano.value == null || ano.value < 0 ) {
    alert('ano inválido');
  }
} 
);


