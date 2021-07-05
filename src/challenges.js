// Desafio 1
function compareTrue(valor1, valor2) {
  if (valor1 === true && valor2 === true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(sentence) {
  return sentence.split(' '); //Função vista em: https://www.devmedia.com.br/javascript-split-dividindo-separando-strings/39254#:~:text=O%20m%C3%A9todo%20split()%20divide,determinado%20por%20uma%20express%C3%A3o%20regular.
}

// Desafio 4
function concatName(array) {
  return array[array.length - 1] + ', ' + array[0];
}

// Desafio 5
function footballPoints(wins, ties) {
  let points = (wins * 3) + ties;
  return points;
}

// Desafio 6
function highestCount(numbers) {
  let highestNumber = Math.max.apply(null, numbers); //Função vista em: https://pt.stackoverflow.com/questions/35202/como-saber-o-maior-valor-de-um-array
  let count = 0;

  for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] === highestNumber) {
      count += 1;
    }
  }
  return count;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distCat1 = cat1 - (mouse); //Calculo visto em: https://www.tutorialspoint.com/operations_with_integers/computing_distance_between_two_integers_on_number_line.htm
  let distCat2 = cat2 - (mouse);
  let resultado = '';

  if (mouse > cat1) {
    distCat1 = mouse - (cat1);
  }if (mouse > cat2) {
    distCat2 = mouse - (cat2);
  }if (distCat1 < distCat2) {
    resultado = 'cat1';
  }else if (distCat2 < distCat1) {
    resultado = 'cat2';
  }else {
    resultado = 'os gatos trombam e o rato foge';
  }
  return resultado;
}

// Desafio 8
function fizzBuzz(array) {
  let fizzBuzzArray = [];

  for (let index = 0; index < array.length; index += 1) {
    if (array[index] % 3 === 0 && array[index] % 5 === 0) {
      fizzBuzzArray.push('fizzBuzz');
    }else if (array[index] % 3 === 0) {
      fizzBuzzArray.push('fizz');
    }else if (array[index] % 5 === 0) {
      fizzBuzzArray.push('buzz');
    }else if (array[index] % 3 > 0 && array[index] % 5 > 0) {
      fizzBuzzArray.push('bug!');
    }
  }
  return fizzBuzzArray;
}


// Desafio 9
function encode(string) {
  let encodedString = '';

  for (let index = 0; index < string.length; index += 1) {
    if (string[index] === 'a') {
      encodedString += '1';
    }else if (string[index] === 'e') {
      encodedString += '2';
    }else if (string[index] === 'i') {
      encodedString += '3';
    }else if (string[index] === 'o') {
      encodedString += '4';
    }else if (string[index] === 'u') {
      encodedString += '5';
    }else {
      encodedString += string[index];
    }
  }
  return encodedString;
}
function decode(string) {
  let decodedString = '';

  for (let index = 0; index < string.length; index += 1) {
    if (string[index] === '1') {
      decodedString += 'a';
    }else if (string[index] === '2') {
      decodedString += 'e';
    }else if (string[index] === '3') {
      decodedString += 'i';
    }else if (string[index] === '4') {
      decodedString += 'o';
    }else if (string[index] === '5') {
      decodedString += 'u';
    }else {
      decodedString += string[index];
    }
  }
  return decodedString;
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
}