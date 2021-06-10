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

function validaDia () {
  if (dia <= 0 || dia > 31) {
    alert('dia inválido');
  }
}
validaDia();

function validaMes () {
  if (mes <= 0 || mes > 12) {
    alert('mês inválido');
  }
}
validaMes();

function validaAno () {
  if (ano <= 0 ) {
    alert('ano inválido');
  }
}
validaAno();