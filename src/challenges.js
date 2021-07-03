// Desafio 1
function compareTrue(valor1, valor2) {
  // seu código aqui
  if (valor1 && valor2 === true) {
    return true;
  } return false;
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(string, espaco) {
  // seu código aqui
  let array = string.split(' ', espaco);
  return array;
}

// Desafio 4
function concatName(array) {
  // seu código aqui
  let primeiroItem = array[0];
  let ultimoItem = 0;

  for (let index = 0; index < array.length; index += 1) {
    ultimoItem = array[index];
  }
  return ultimoItem + ', ' + primeiroItem;
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let points;
  points = wins * 3 + ties;
  return points;
}

// Desafio 6
function highestCount(numbers) {
  // seu código aqui
  // Verifica maior número
  let maiorNumero = 0;
  let contador = 0;
  for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] > maiorNumero || numbers[index] < 0) {
      maiorNumero = numbers[index];
    }
  }
  for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] === maiorNumero) {
      contador += 1;
    }
  }
  return contador;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  if (cat1 === mouse -1 || cat1 === mouse +1 && cat2 === mouse -1 || cat2 === mouse +1) {
    return "os gatos trombam e o rato foge";
  } else if (cat1 < cat2 && mouse < cat1 || mouse > cat1) {
    return "cat1";
  } else if (cat2 < cat1 && mouse < cat2 || mouse > cat2) {
    return "cat2";
  }
}

// Desafio 8
function fizzBuzz(numbersArray) {
  // seu código aqui
  for (let index = 0; index < numbersArray.length; index += 1) {
    if (numbersArray[index] % 3 === 0 && numbersArray[index] % 5 === 0) {
      numbersArray[index] = 'fizzBuzz';
    } else if (numbersArray[index] % 3 === 0) {
      numbersArray[index] = 'fizz';
    } else if (numbersArray[index] % 5 === 0) {
      numbersArray[index] = 'buzz';
    } else {
      numbersArray[index] = 'bug!';
    }
  }
  return numbersArray;
}

// Desafio 9
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/replace#
// Usei como referência o String.prototype.replace() da documentação.
function encode(stringText) {
  // seu código aqui
  stringText = stringText.replace(/a/gi, '1');
  stringText = stringText.replace(/e/gi, '2');
  stringText = stringText.replace(/i/gi, '3');
  stringText = stringText.replace(/o/gi, '4');
  stringText = stringText.replace(/u/gi, '5');
  return stringText;
}
function decode(stringText) {
  // seu código aqui
  stringText = stringText.replace(/1/gi, 'a');
  stringText = stringText.replace(/2/gi, 'e');
  stringText = stringText.replace(/3/gi, 'i');
  stringText = stringText.replace(/4/gi, 'o');
  stringText = stringText.replace(/5/gi, 'u');
  return stringText;
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
