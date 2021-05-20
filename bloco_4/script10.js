let custoBrutoA = 3;
let custoBrutoB = 5;

let impostA = custoBrutoA * 0.2;
    // console.log('imposto A: ' + impostA);
let impostB = custoBrutoB * 0.2;
    // console.log('imposto B: ' + impostB);

let vendaA = 9;
let vendaB = 15;

    if (custoBrutoA < 0 || custoBrutoB < 0) {
      console.log('Erro');
    } 
    else if (custoBrutoA >= 0 || custoBrutoB >= 0) {

      let custoLiqA = custoBrutoA + impostA;
      let lucroA = vendaA - custoLiqA;
        console.log ('Custo Produto A com imposto de 20%: ' + custoLiqA);
        console.log ( 'Lucro ao vender 1000un do produto A: ' + lucroA * 1000);

      let custoLiqB = custoBrutoB + impostB;
      let lucroB = vendaB - custoLiqB;
        console.log ('Custo Produto B com imposto de 20%: ' + custoLiqB);
        console.log ( 'Lucro ao vender 1000un do produto B: ' + lucroB * 1000);
    } 
    else {
    }














/*
Escreva um programa que se inicie com dois valores em duas variáveis diferentes: o custo de um produto e seu valor de venda. A partir dos valores, calcule quanto de lucro (valor de venda descontado o custo do produto) a empresa terá ao vender mil desses produtos.
Atente que, sobre o custo do produto, incide um imposto de 20%.
Seu programa também deve emitir uma mensagem de erro e encerrar caso algum dos seus valores de entrada seja menor que zero.
O lucro de um produto é o resultado da subtração do valor de venda pelo custo do mesmo, sendo que o imposto de 20% também faz parte do valor de custo.
valorCustoTotal = valorCusto + impostoSobreOCusto
lucro = valorVenda - valorCustoTotal (lucro de um produto)
*/