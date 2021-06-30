// Desafio 10
function techList(array, name) {
  let arrayOfObjects = [];
  array.sort();
  if (array.length === 0) {
    return 'Vazio!';
  } else {
    for (let technology of array) {
      arrayOfObjects.push({
        tech: technology,
        name: name,
      });
    }
  }

  return arrayOfObjects;
}

// Desafio 11
function generatePhoneNumber(array) {
  let phoneNumberString = '';
  if (array.length != 11) {
    return 'Array com tamanho incorreto.';
  }

  for (let i = 0; i < array.length; i += 1) {
    
    let count = 0;
    for (let j = 0; j < array.length; j += 1) {
      if (array[i] === array[j]) {
        count++;
      }
      if (array[j] < 0 || array[j] > 9) {
        return 'não é possível gerar um número de telefone com esses valores';
      }
      if (count >= 3){
        return 'não é possível gerar um número de telefone com esses valores';
      }
    }

    if (i === 0) {
      phoneNumberString += '(';
    } else if (i === 2) {
      phoneNumberString += ') ';
    } else if (i === 7) {
      phoneNumberString += '-';
    }

    phoneNumberString += array[i]
  }

  return phoneNumberString
}

// Desafio 12
function triangleCheck(lineA,lineB,lineC) {
  let isTriangle = false;
  if(Math.abs(lineB - lineC) < lineA && lineA < lineB + lineC) {
    if (Math.abs(lineA - lineC) < lineB && lineB < lineA + lineC){
      if(Math.abs(lineA - lineB) < lineC && lineC < lineA + lineB){
        isTriangle = true;
      }
    }
  }

  return isTriangle
}

// Desafio 13
function hydrate(string) {
  let regexp = /\d+/g;
  let arrayOfNumbers = string.match(regexp);
  let total = 0;
  for (let number of arrayOfNumbers) {
    number = parseInt(number);
    total += number;
  }
  return total > 1? total + ' copos de água': total + ' copo de água'
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
