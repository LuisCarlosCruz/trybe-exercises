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