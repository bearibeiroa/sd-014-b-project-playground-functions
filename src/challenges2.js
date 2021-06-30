// Desafio 10
function techList() {
  // seu código aqui
}

// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
/*
12 - Crie uma função de Condição de existência de um triângulo
Um triângulo é composto de três linhas: lineA, lineB e lineC. Crie uma função chamada triangleCheck que deverá receber as três linhas como parâmetro e retornar se é possível formar um triângulo com os valores apresentados de cada linha.

Para tanto, tenha em mente algumas considerações:
Para que seja possível formar um triângulo, é necessário que a medida de qualquer um dos lados seja menor que a soma das medidas dos outros dois e maior que o valor absoluto da diferença entre essas medidas. Para obter o valor absoluto de um número em JavaScript, pesquise pela função Math.abs. O retorno da sua função deverá ser um booleano.

Exemplo: o retorno de triangleCheck(10, 14, 8) deverá ser true.
O que será verificado:
Retorne false quando a medida de qualquer um dos lados seja maior que a soma das medidas dos outros dois.
Retorne false quando a medida de qualquer um dos lados seja menor que o valor absoluto da diferença entre essas medidas.
Retorne true quando a medida de qualquer um dos lados seja menor que a soma das medidas dos outros dois e maior que o valor absoluto da diferença entre essas medidas.*/

function triangleCheck(lineA, lineB, lineC) {
  let difAB = Math.abs(lineA-lineB);
  let difBC = Math.abs(lineB-lineC);
  let difAC = Math.abs(lineA-lineC);

  let sumAB = (lineA+lineB);
  let sumBC = (lineB+lineC);
  let sumAC = (lineA+lineC);

  let checkA = ((lineA < sumBC) && (lineA > difBC));
  let checkB = ((lineB < sumAC) && (lineB > difAC));
  let checkC = ((lineC < sumAB) && (lineC > difAB));
  let resultado = false;

// (lineA > sumBC) || (lineB > sumAC) || (lineC > sumAB)
// (lineA < difBC) || (lineB < difAC) || (lineC < difAB)

  ////Retorne false quando a medida de qualquer um dos lados seja maior que a soma das medidas dos outros dois.
  if ((lineA > sumBC) || (lineB > sumAC) || (lineC > sumAB)) {
    return false;
  }
  //Retorne false quando a medida de qualquer um dos lados seja menor que o valor absoluto da diferença entre essas medidas.
  else if ((lineA < difBC) || (lineB < difAC) || (lineC < difAB)) {
      return false;
  }
  //Retorne true quando a medida de qualquer um dos lados seja menor que a soma das medidas dos outros dois
  //e maior que o valor absoluto da diferença entre essas medidas.

  else if ((checkA === true) || (checkB === true) || (checkC === true)) {
    return true;
  }
}

//triangleCheck(10,14,8);

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
