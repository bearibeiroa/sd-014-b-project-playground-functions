// Desafio 1
function compareTrue(value1, value2) {
  // seu código aqui
  if (value1 === true && value2 === true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  let calc = (base * height) / 2;
  return calc;
}

// Desafio 3
function splitSentence(sentence) {
  // seu código aqui
  let word = '';
  let arrayWord = [];
  for (let index = 0; index <= sentence.length; index += 1) {
    if (sentence[index] === ' ' || index === sentence.length) {
      arrayWord.push(word);
      word = '';
    } else {
      word += sentence[index];
    }
  }
  return arrayWord;
}

// Desafio 4
function concatName(arrayNames) {
  // seu código aqui
  let tamanhoArray = arrayNames.length - 1;
  let stringNames = arrayNames[tamanhoArray];
  stringNames += ', ' + arrayNames[0];
  return stringNames;
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let points = 0;
  points = (3 * wins) + ties;
  return points;
}

// Desafio 6
function highestCount(arrayNumbers) {
  // seu código aqui
  let numeros = arrayNumbers;
  // encontra o maior número
  let maiorNumero = numeros[0];
  for (let key in numeros) {
    if (numeros[key] > maiorNumero) {
      maiorNumero = numeros[key];
    }
  }
  // conta quantas vezes o número apareceu
  let contador = 0;
  for (let key in numeros) {
    if (numeros[key] === maiorNumero) {
      contador += 1;
    }
  }
  return contador;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  let pcat1 = 0;
  let pcat2 = 0;
  if (mouse > cat1) {
    pcat1 = mouse - cat1;
  } else pcat1 = cat1 - mouse;
  if (mouse > cat2) {
    pcat2 = mouse - cat2;
  } else pcat2 = cat2 - mouse;

  if (pcat1 > pcat2) {
    return 'cat2';
  } if (pcat1 === pcat2) {
    return 'os gatos trombam e o rato foge';
  } else return 'cat1';
}

// Desafio 8
function fizzBuzz(array) {
  // seu código aqui
  let arrayOfString = [];
  for (let key in array) {
    if (array[key] % 3 === 0 && array[key] % 5 === 0) {
      arrayOfString.push('fizzBuzz');
    } else if (array[key] % 3 === 0) {
      arrayOfString.push('fizz');
    } else if (array[key] % 5 === 0) {
      arrayOfString.push('buzz');
    } else {
      arrayOfString.push('bug!');
    }
  }
  return arrayOfString;
}

// Desafio 9
function encode(string) {
  // seu código aqui
  let newString = '';
  for (let index of string) {
    if (index === 'a') {
      newString += '1';
    } else if (index === 'e') {
      newString += '2';
    } else if (index === 'i') {
      newString += '3';
    } else if (index === 'o') {
      newString += '4';
    } else if (index === 'u') {
      newString += '5';
    } else {
      newString += index;
    }
  }
  return newString;
}

function decode(string) {
  // seu código aqui
  let newString = '';
  for (let index of string) {
    if (index === '1') {
      newString += 'a';
    } else if (index === '2') {
      newString += 'e';
    } else if (index === '3') {
      newString += 'i';
    } else if (index === '4') {
      newString += 'o';
    } else if (index === '5') {
      newString += 'u';
    } else {
      newString += index;
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
