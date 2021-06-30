// Desafio 10
function techList(arrayTech, name) {
  let sortedList = arrayTech.sort();
  let newList = [];
  if (arrayTech.length === 0) {
    return 'Vazio!';
  }
  for (let i in sortedList) {
    newList.push({ tech: sortedList[i], name });
  }
  return newList;
}

// Desafio 11
function conditions(numbers) {
  for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] < 0 || numbers[i] > 9) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }   
}
function repeatedNumber(numbers) {
  let currentNumber = 0;
  let qtdVezes = 0;
  for (let i = 0; i < numbers.length; i += 1) {
    currentNumber = numbers[i];
    for (let j = 0; j < numbers.length; j += 1) {
      if (currentNumber === numbers[j]) {
        qtdVezes += 1;
      }
    }
    if (qtdVezes >= 3) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
    qtdVezes = 0;
  }
}
function checkLength(numbers) {
  if (numbers.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
}
function generatePhoneNumber(numbers) {
  let condicaoTamanho = checkLength(numbers);
  let condicaoNumeros = conditions(numbers);
  let condicaoRepeticao = repeatedNumber(numbers);
  if (condicaoTamanho !== undefined) {
    return condicaoTamanho;
  } else if (condicaoRepeticao !== undefined) {
    return condicaoRepeticao;
  } else if (condicaoNumeros !== undefined) {
    return condicaoNumeros;
  }
  let phoneNumber = '(';
  for (let i = 0; i < numbers.length; i += 1) {
    if (i < 2) {
      phoneNumber += numbers[i];
    }
    if (phoneNumber.length === 3) {
      phoneNumber += ') ';
    }
    if (i >= 2 && i < 7) {
      phoneNumber += numbers[i];
    }
    if (phoneNumber.length === 10) {
      phoneNumber += '-';
    }
    if (i >= 7) {
      phoneNumber += numbers[i];
    }
  }
  return phoneNumber;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if (lineA > lineB + lineC || lineB > lineA + lineC || lineC > lineA + lineB) {
    return false;
  } else if (lineA < Math.abs(lineB - lineC) || lineB < Math.abs(lineA - lineC) || lineC < Math.abs(lineA - lineB)) {
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
