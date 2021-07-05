// Função para verificar repetições dentro de um Array;
function countReptition(lista, number) {
  let value = 0;
  for (let cont = 0; cont < lista.length; cont += 1) {
    if (number === lista[cont]) {
      value += 1;
    }
  }
  return value;
}

// Verifica se um número é divisivel por 3 e 5;
function numberDivision3And5(number) {
  if (number % 3 === 0 && number % 5 === 0) {
    return true;
  }
  return false;
}

// Verifica se um número é divisivel por 3;
function numberDivision3(number) {
  if (number % 3 === 0) {
    return true;
  }
  return false;
}

// Verifica se um número é divisivel por 5;
function numberDivision5(number) {
  if (number % 5 === 0) {
    return true;
  }
  return false;
}

// Desafio 1
function compareTrue(value1, value2) {
  // seu código aqui
  if (value1 && value2) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  let area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(value) {
  // seu código aqui
  return value.split(' ');
}

// Desafio 4
function concatName(value) {
  // seu código aqui
  let ultimoIndex = value[(value.length) - 1];
  let primeiroIndex = value[0];
  let separador = ', ';
  let concatenado = ultimoIndex + separador + primeiroIndex;
  return concatenado;
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let vitorias = wins * 3;
  let empates = ties * 1;
  let result = vitorias + empates;
  return result;
}

// Desafio 6
function highestCount(valueList) {
  // seu código aqui
  let maiorValor = Math.max(...valueList);
  let repetitions = countReptition(valueList, maiorValor);

  return repetitions;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  let distanceCat1 = Math.abs(mouse - cat1);
  let distanceCat2 = Math.abs(mouse - cat2);
  let cat1Message = 'cat1';
  let cat2Message = 'cat2';
  let mouseMessage = 'os gatos trombam e o rato foge';
  if (distanceCat1 === distanceCat2) {
    return mouseMessage;
  }
  if (distanceCat1 < distanceCat2) {
    return cat1Message;
  }
  if (distanceCat2 < distanceCat1) {
    return cat2Message;
  }
}

// Desafio 8
function fizzBuzz(numbers) {
  // seu código aqui
  let result = [];
  for (let value of numbers) {
    if (numberDivision3And5(value)) {
      result.push('fizzBuzz');
    } else if (numberDivision3(value)) {
      result.push('fizz');
    } else if (numberDivision5(value)) {
      result.push('buzz');
    } else {
      result.push('bug!');
    }
  }
  return result;
}

// Desafio 9
function encode(string) {
  // seu código aqui
  let newString = '';
  for (let index = 0; index < string.length; index += 1) {
    let valorAtual = string[index];
    switch (valorAtual) {
      case 'a':
        newString += '1';
        break;
      case 'e':
        newString += '2';
        break;
      case 'i':
        newString += '3';
        break;
      case 'o':
        newString += '4';
        break;
      case 'u':
        newString += '5';
        break;
      default:
        newString += valorAtual;
        break;
    }
  }
  return newString;
}

function decode(string) {
  // seu código aqui
  let newString = '';
  for (let index = 0; index < string.length; index += 1) {
    let valorAtual = string[index];
    switch (valorAtual) {
      case '1':
        newString += 'a';
        break;
      case '2':
        newString += 'e';
        break;
      case '3':
        newString += 'i';
        break;
      case '4':
        newString += 'o';
        break;
      case '5':
        newString += 'u';
        break;
      default:
        newString += valorAtual;
        break;
    }
  }
  return newString;
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
