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
  let distanceMouseCat1 = Math.abs(mouse - cat1);
  let distanceMouseCat2 = Math.abs(mouse - cat2);
  let result = '';
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
function fizzOrBuzzOrBug(number) {
  let bug = 'bug!';
  if (number % 3 === 0) {
    bug = 'fizz';
    return bug;
  }
  if (number % 5 === 0) {
    bug = 'buzz';
    return bug;
  }
  return bug;
}

function fizzBuzz(fizzBuzzArray) {
  for (let index = 0; index < fizzBuzzArray.length; index += 1) {
    if (fizzBuzzArray[index] % 3 === 0 && fizzBuzzArray[index] % 5 === 0) {
      fizzBuzzArray[index] = 'fizzBuzz';
    } else {
      fizzBuzzArray[index] = fizzOrBuzzOrBug(fizzBuzzArray[index]);
    }
  }
  return fizzBuzzArray;
}

// Desafio 9
let pwdVaultEncode = { a: '1', e: '2', i: '3', o: '4', u: '5' };

let pwdVaultDecode = { 1: 'a', 2: 'e', 3: 'i', 4: 'o', 5: 'u' };

function wordToArrayEncode(word) {
  let array = [];
  for (let index = 0; index < word.length; index += 1) {
    array.push(word[index]);
  }
  return array;
}

function arrayToWordEncode(array) {
  let word = '';
  for (let index = 0; index < array.length; index += 1) {
    word += array[index];
  }
  return word;
}

function encodeWithKey(array, chave) {
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] === chave) {
      array[index] = pwdVaultEncode[chave];
    }
  }
  return array;
}

function decodeWithKey(array, chave) {
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] === chave) {
      array[index] = pwdVaultDecode[chave];
    }
  }
  return array;
}

function encode(toBeEncoded) {
  let encodedWordArray = wordToArrayEncode(toBeEncoded);
  for (let key in pwdVaultEncode) {
    encodedWordArray = encodeWithKey(encodedWordArray, key);
  }
  return arrayToWordEncode(encodedWordArray);
}
function decode(toBeDecoded) {
  let decodedWordArray = wordToArrayEncode(toBeDecoded);
  for (let key in pwdVaultDecode) {
    decodedWordArray = decodeWithKey(decodedWordArray, key);
  }
  return arrayToWordEncode(decodedWordArray);
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
