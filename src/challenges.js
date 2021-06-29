// Desafio 1
function compareTrue(param1, param2) {
  if (param1 === true && param2 === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(phraseReceived) {
  let phrasesArray = [];
  let tempPhrase = '';
  for (let letter of phraseReceived) {
    if (letter === ' ') {
      phrasesArray.push(tempPhrase);
      tempPhrase = '';
    } else {
      tempPhrase += letter;
    }
  }
  phrasesArray.push(tempPhrase);
  return phrasesArray;
}

// Desafio 4
function concatName(namesArray) {
  let namesArrayLength = namesArray.length;
  let primeiroItem = namesArray[0];
  let ordemInvertida = '';
  let ultimoItem = namesArray[namesArrayLength - 1];
  ordemInvertida += ultimoItem;
  ordemInvertida += ', ';
  ordemInvertida += primeiroItem;
  return ordemInvertida;
}

// Desafio 5
function footballPoints(wins, ties) {
  let winPoints = wins * 3;
  let tiePoints = ties;
  return winPoints + tiePoints;
}

// Desafio 6
function highestCount(arrayOfNumbers) {
  let largerNumber = arrayOfNumbers[0];
  let largeNumCounter = 0;
  for (let number of arrayOfNumbers) {
    if (number > largerNumber) {
      largerNumber = number;
      largeNumCounter = 1;
    } else if (number === largerNumber) {
      largeNumCounter += 1;
    }
  }
  return largeNumCounter;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanceMouseCat1 = mouse - cat1;
  let distanceMouseCat2 = mouse - cat2;
  let result = '';
  if (mouse <= cat1) {
    distanceMouseCat1 = cat1 - mouse;
  } else {
    distanceMouseCat1 = mouse - cat1;
  }
  if (mouse <= cat2) {
    distanceMouseCat2 = cat2 - mouse;
  } else {
    distanceMouseCat2 = mouse - cat2;
  }
  if (distanceMouseCat1 === distanceMouseCat2) {
    result = 'os gatos trombam e o rato foge';
  } else if (distanceMouseCat1 < distanceMouseCat2) {
    result = 'cat1';
  } else {
    result = 'cat2';
  }
  return result;
}


// Desafio 8
function fizzBuzz(arrayOfNumbers) {
  let fizzBuzzArray = [];
  for (let number of arrayOfNumbers) {
    if (number % 3 != 0 && number % 5 !=0) {
      fizzBuzzArray.push('bug!');
    } else if (number % 3 === 0 && number % 5 === 0) {
      fizzBuzzArray.push('fizzBuzz');
    } else if (number % 3 === 0 && number % 5 != 0) {
      fizzBuzzArray.push('fizz');
    } else if (number % 3 != 0 && number % 5 === 0) {
      fizzBuzzArray.push('buzz');
    } else {
      fizzBuzzArray.push(number);
    }
  }
  return fizzBuzzArray;
}

// Desafio 9
function encode(toBeEncoded) {
  let pwdVault = {
    a: '1',
    e: '2',
    i: '3',
    o: '4',
    u: '5',
  }
  let encodedWordArray = [];
  for (let index = 0; index < toBeEncoded.length; index += 1) {
    encodedWordArray.push(toBeEncoded[index]);
  }
  for (let key in pwdVault) {
    for (let index = 0; index < encodedWordArray.length; index += 1) {
      if (encodedWordArray[index] === key) {
        encodedWordArray[index] = pwdVault[key];
      }
    }
  }
  let encodedWord = '';
  for (let index = 0; index < encodedWordArray.length; index += 1) {
    encodedWord += encodedWordArray[index];
  }
  return encodedWord;
}
function decode(toBeDecoded) {
  let pwdVault = {
    '1': 'a',
    '2': 'e',
    '3': 'i',
    '4': 'o',
    '5': 'u',
  }
  let decodedWordArray = [];
  for (let index = 0; index < toBeDecoded.length; index += 1) {
    decodedWordArray.push(toBeDecoded[index]);
  }
  for (let key in pwdVault) {
    for (let index = 0; index < decodedWordArray.length; index += 1) {
      if (decodedWordArray[index] === key) {
        decodedWordArray[index] = pwdVault[key];
      }
    }
  }
  let decodedWord = '';
  for (let index = 0; index < decodedWordArray.length; index += 1) {
    decodedWord += decodedWordArray[index];
  }
  return decodedWord;
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
