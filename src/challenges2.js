// Desafio 10
function techList() {
  // seu código aqui
}

// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12

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

  if ((lineA > sumBC) || (lineB > sumAC) || (lineC > sumAB)) {
    return false;
  }

  else if ((lineA < difBC) || (lineB < difAC) || (lineC < difAB)) {
      return false;
  }
  //Retorne true quando a medida de qualquer um dos lados seja menor que a soma das medidas dos outros dois
  //e maior que o valor absoluto da diferença entre essas medidas.

  else if ((checkA === true) || (checkB === true) || (checkC === true)) {
    return true;
  }
}

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
