// Desafio 1
function compareTrue(value1, value2) {
  if (value1 === true && value2 === true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(string) {
  let word = '';
  let arrayOfWords = [];
  for (let index = 0; index < string.length; index += 1) {
    if (string[index]!= ' ') {
      word += string[index];
    } else {
      arrayOfWords.push(word);
      word = '';
    }

    if (index === string.length - 1) {
      arrayOfWords.push(word);
      word = '';
    }
  }
  return arrayOfWords;
}


// Desafio 4
function concatName(arrayOfStrings) {
  let result = arrayOfStrings[arrayOfStrings.length -1] + ', ' + arrayOfStrings[0];
  return result;
}


// Desafio 5
function footballPoints(wins, ties) {
  let points = (wins * 3) + (ties * 1);
  return points;

}

// Desafio 6
function highestCount(arrayOfNumbers) {
  let biggestNumber = 0;
  let repetitions = 0;
  for (number of arrayOfNumbers) {
    if (Math.abs(number) > biggestNumber) {
      biggestNumber = number;
    }
  } 
  for (index = 0; index < arrayOfNumbers.length; index += 1) {
    if (arrayOfNumbers[index] === biggestNumber) {
      repetitions += 1;
    }
  }
  return repetitions;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanceMouseCat1 = Math.abs(mouse - cat1);
  let distanceMouseCat2 = Math.abs(mouse - cat2);
  
  if (distanceMouseCat1 > distanceMouseCat2) {
    return 'cat2';
  } else if (distanceMouseCat2 > distanceMouseCat1) {
    return 'cat1';
  } else {
    return 'os gatos trombam e o rato foge';
  }
}


// Desafio 8
function fizzBuzz(arrayNumbers) {
  for (index in arrayNumbers) {
    if ((arrayNumbers[index] % 3) === 0 && (arrayNumbers[index] % 5) != 0) {
      arrayNumbers[index] = 'fizz';
    } else if ((arrayNumbers[index] % 5) === 0 && (arrayNumbers[index] % 3) != 0) {
      arrayNumbers[index] = 'buzz';
    } else if ((arrayNumbers[index] % 5) === 0 && (arrayNumbers[index] % 3) === 0) {
      arrayNumbers[index] = 'fizzBuzz';
    } else {
      arrayNumbers[index] = 'bug!'
    }
  }
  return arrayNumbers;
}


// Desafio 9
function encode(stringDecryp) {
  let mensageEncode = '';
  for (letter of stringDecryp) {
    if (letter === 'a') {
      mensageEncode += '1';
    } else if (letter === 'e') {
      mensageEncode += '2';
    } else if (letter === 'i') {
      mensageEncode += '3';
    } else if (letter === 'o') {
      mensageEncode += '4';
    } else if (letter === 'u') {
      mensageEncode += '5';
    } else {
      mensageEncode += letter;
    }
  }
  return mensageEncode;
}

function decode(stringCryp) {
  mensageDecode = '';
  for (letter of stringCryp) {
    if (letter === '1') {
      mensageDecode += 'a';
    } else if (letter === '2') {
      mensageDecode += 'e';
    } else if (letter === '3') {
      mensageDecode += 'i';
    } else if (letter === '4') {
      mensageDecode += 'o';
    } else if (letter === '5') {
      mensageDecode += 'u';
    } else {
      mensageDecode += letter;
    }
  }
  return mensageDecode;
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
