// Desafio 10

function techList(tech, name) {
  let techOrdened = tech.sort();
  let result = [];
  if (techOrdened.length === 0) {
    return 'Vazio!';
  }

  for (let index of techOrdened) {
    let object = {
      tech: index,
      name: name,
    };
    result.push(object);
  }
  return result;
}

// Desafio 11

function generatePhoneNumber(foneNumbers) {
  let cont = 0;
  let ddd = '';
  let first = '';
  let second = '';
  if (foneNumbers.length != 11) {
    return 'Array com tamanho incorreto.';
  }
  for (let index = 0; index < foneNumbers.length; index += 1) {
    cont = 0;
    for (let indexTwo = 0; indexTwo < foneNumbers.length; indexTwo += 1) {
      if (foneNumbers[indexTwo] < 0 || foneNumbers[indexTwo] > 9) {
        return 'não é possível gerar um número de telefone com esses valores';
      }
      if (foneNumbers[index] === foneNumbers[indexTwo]) {
        cont += 1;
      }
    }
    if (cont > 2) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
    if (index < 2) {
      ddd += foneNumbers[index];
    } else if (index > 1 && index < 7) {
      first += foneNumbers[index];
    } else {
      second += foneNumbers[index];
    }
  }
  return '(' + ddd + ') ' + first + '-' + second;
}

// Desafio 12

function triangleCheck(lineA, lineB, lineC) {
  let somaAB = lineA + lineB;
  let somaAC = lineA + lineC;
  let somaBC = lineB + lineC;
  let subtAB = Math.abs(lineA - lineB);
  let subtAC = Math.abs(lineA - lineC);
  let subtBC = Math.abs(lineB - lineC);

  if (lineA > somaBC || lineA < subtBC) {
    return false;
  }
  if (lineB > somaAC || lineB < subtAC) {
    return false;
  }
  if (lineC > somaAB || lineC < subtAB) {
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
