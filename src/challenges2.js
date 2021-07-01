//Função verifica a quantidade de repetiçõesde um número:
function maxReption(lista) {
  let maxOccurrences = 0;
  for (let index = 0; index < lista.length; index += 1) {
    let contOccurrences = 0;
    let item = lista[index];
    for (let cont = 1; cont <= lista.length; cont += 1) {
      if (item === lista[cont - 1]) {
        contOccurrences += 1;
      }
    }
    if (maxOccurrences < contOccurrences) {
      maxOccurrences = contOccurrences;
    }
  }
  return maxOccurrences;
}

//Função verifica se existem números menores que 0 e maior que 9
function verificaArrayNumber(arrayNumber) {
  for (let value of arrayNumber) {
    if (value < 0 || value > 9) {
      return true;
    }
  }
  return false;
}

// Desafio 10
function techList(list, nome) {
  // seu código aqui
  let result = [];
  let ordenaList = list.sort();
  if (list.length === 0) {
    return 'Vazio!';
  }
  for (let value of ordenaList) {
    result.push({
      tech: value,
      name: nome,
    });
  }
  return result;
}

// Desafio 11
function generatePhoneNumber(arrayNumber) {
  // seu código aqui
  let arraySizeInvalidMessage = 'Array com tamanho incorreto.';
  let arrayNumberInvalidMessage = 'não é possível gerar um número de telefone com esses valores';
  let arrayNumberZeroAndNove = verificaArrayNumber(arrayNumber);
  let arrayNumberReptetion = maxReption(arrayNumber);
  let tel = '';
  if (arrayNumber.length !== 11) {
    return arraySizeInvalidMessage;
  } else if (arrayNumberZeroAndNove || arrayNumberReptetion >= 3) {
    return arrayNumberInvalidMessage;
  } else {
    for (let index = 0; index < arrayNumber.length; index += 1) {
      if (index === 0) {
        tel += '(' + arrayNumber[index];
      } else if (index === 1) {
        tel += arrayNumber[index] + ') ';
      } else if (index === 7) {
        tel += '-' + arrayNumber[index];
      } else {
        tel += arrayNumber[index];
      }

    }
  }
  return tel;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  // seu código aqui
  let sumA = lineA + lineB;
  let sumB = lineA + lineC;
  let sumC = lineB + lineC;
  let subA = Math.abs(lineA - lineB);
  let subB = Math.abs(lineA - lineC);
  let subC = Math.abs(lineB - lineC);
  if (lineA > sumC && lineA > subC) {
    return false;
  } else if(lineB > sumB && lineB > subB) {
    return false;
  } else if (lineC > sumA && lineC > subA) {
    return false;
  }
  return true;
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
