// Desafio 10
function techList(array, name) {
  let objectList = [];
  if (array.length > 0) {
    for (let index = 0; index < array.length; index += 1) {
      objectList.push({ tech: array[index], name: name,});
    }
    return objectList.sort(function(a, b) {
      let nameA = a.tech.toUpperCase();
      let nameB = b.tech.toUpperCase();
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    });
  }
  return 'Vazio!';
}

// Desafio 11
function generatePhoneNumber(numberArray) {
  if (numberArray.length > 11 || numberArray.length < 11) {
    return 'Array com tamanho incorreto.';
  } 
  for (let index = 0; index < numberArray.length; index += 1) {
    let contator = 0;
    for (let index2 = 0; index2 < numberArray.length; index2 += 1) {
      if (numberArray[index2] === numberArray[index]) {
        contator += 1;
      }
    }
    if (contator > 2 || numberArray[index] > 9 || numberArray[index] < 0) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
    contator = 0;
  }
  let telephoneNumber = '(' + numberArray[0] + numberArray[1] + ') ' + numberArray[2] + numberArray[3] + numberArray[4] + numberArray[5] + numberArray[6] + '-' + numberArray[7] + numberArray[8] + numberArray[9] + numberArray[10];
  return telephoneNumber;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if (lineA > lineB + lineC || lineB > lineA + lineC || lineC > lineA + lineB || lineA < Math.abs(lineB - lineC) || lineB < Math.abs(lineA - lineC)) {
    return false;
  }
  return true;
}

// Desafio 13
function hydrate(bebumCheck) {
  let integer = 0;
  let re = new RegExp('[0-9]', 'g');
  let numbersOfString = bebumCheck.match(re);
  for (let index = 0; index < numbersOfString.length; index += 1) {
    integer += parseInt(numbersOfString[index]);
  }
  let hydratationWarning;
  if (integer === 1) {
    hydratationWarning = integer + ' copo de água';
  } else {
    hydratationWarning = integer + ' copos de água';
  }
  return hydratationWarning;
}
module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
