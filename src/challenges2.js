// Desafio 10
function techList(technologies, name) {
  let newList = [];
  technologies.sort();
  if (technologies.length !== 0) {
    for (let i = 0; i < technologies.length; i += 1) {
      newList.push({ tech: technologies[i], name: name });
    }
  } else {
    newList = 'Vazio!';
  }
  return newList;
}

// Desafio 11
function generatePhoneNumber(phoneNumbers) {
  let number = '(';
  let repeatNumber = 0;
  let generate = true;
  let stopForRepeat = false;
  if (phoneNumbers.length === 11) {
    // Verifica se tem algum numero que repete mais ou igual a 3 vezes
    for (let i = 0; i < phoneNumbers.length; i += 1) {
      for (let k = 0; k < phoneNumbers.length; k += 1) {
        if (phoneNumbers[i] === phoneNumbers[k]) {
          repeatNumber += 1;
        }
      }
      if (repeatNumber >= 3) {
        stopForRepeat = true;
        i = phoneNumbers.length;
      }
      repeatNumber = 0;
    }
    // Verifica todos os requisitos
    for (let i = 0; i < phoneNumbers.length; i += 1) {
      if (phoneNumbers[i] < 0 || phoneNumbers[i] > 9 || stopForRepeat) {
        number = 'não é possível gerar um número de telefone com esses valores';
        generate = false;
      }
    }
    // Verifica se pode transformar a array em um numero de telefone
    if (generate) {
      for (let i = 0; i < phoneNumbers.length; i += 1) {
        if (i < 2) {
          number += phoneNumbers[i];
        } else if (i === 2) {
          number += (') ' + phoneNumbers[i]);
        } else if (i > 2 && i < 7) {
          number += phoneNumbers[i];
        } else if (i === 7) {
          number += ('-' + phoneNumbers[i]);
        } else {
          number += phoneNumbers[i];
        }
      }
    }
  } else {
    number = 'Array com tamanho incorreto.';
  }
  return number;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let isTriangle = 0;
  if (lineA < (lineB + lineC) && lineA > Math.abs(lineB - lineC)) {
    isTriangle += 1;
  }
  if (lineB < (lineA + lineC) && lineB > Math.abs(lineA - lineC)) {
    isTriangle += 1;
  }
  if (lineC < (lineA + lineB) && lineC > Math.abs(lineA - lineB)) {
    isTriangle += 1;
  }
  if (isTriangle === 3) {
    isTriangle = true;
  } else {
    isTriangle = false;
  }
  return isTriangle;
}

// Desafio 13
function hydrate(quantoBebi) {
  let coposDeAgua = 0;
  let quantidadeBebida = quantoBebi.match(/\d+/g);
  for (let i = 0; i < quantidadeBebida.length; i += 1) {
    coposDeAgua += parseInt(quantidadeBebida[i]);
  }
  if (coposDeAgua === 1) {
    coposDeAgua += ' copo de água';
  } else {
    coposDeAgua += ' copos de água';
  }
  return coposDeAgua;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
