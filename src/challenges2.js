// Desafio 10
function techList() {
  // seu código aqui
}

// Desafio 11

function generatePhoneNumber(numbers) {
  if (numbers.length = 11) { ///////////////// 
    for (let indice in numbers) {
      if (numbers[indice]> 0) {
        ///contador de repetidos
        let contRepetido = 0;
        let contNumero = 0;
        let indexNumeroRepetido = 0;
        for (let index in numbers) {
          let verificaNumero = numeros[index];
          for (let index2 in numbers) {
            if (verificaNumero === numbers[index2]) {
              contNumero += 1;
            }
          }
          if (contNumero > contRepetido) {
            contRepetido = contNumero;
            indexNumeroRepetido = index;
          }
          contNumero = 0;
        }
        ///contador de repetidos
        if (contNumero <3) {
          .
        }
        else {return("não é possível gerar um número de telefone com esses valores");}
      }
      else {return("não é possível gerar um número de telefone com esses valores");}
    }
  }
  else {return ("Array com tamanho incorreto.");}
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
