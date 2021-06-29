// Desafio 1
function compareTrue(valueA, valueB) {
  if (valueA === true && valueB === true) {
    return true
  }
  else {
    return false
  }
}

// Desafio 2
function calcArea(base, height) {
  area = (base*height)/2
  return area
}

// Desafio 3
function splitSentence(str) {
  spl = str.split(' ')
  return spl
}

// Desafio 4
function concatName(myArray) {
  concat = myArray[myArray.length - 1];
  return concat + ', ' + myArray[0] 
}

// Desafio 5
function footballPoints(wins, ties) {
  points = wins * 3 + ties;
  return points
}

// Desafio 6
function highestCount(theArray) {
  let count = 0;
  let highestNumber = Math.max.apply(Math, theArray);
  for (index = 0; index < theArray.length; index += 1) {
    if (theArray[index] === highestNumber) {
      count += 1
    }
  }
  return count
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let dist1 = cat1 - mouse
  let dist2 = cat2 - mouse
  if (Math.abs(dist1) === Math.abs(dist2)) {
    return 'os gatos trombam e o rato foge';
  }
  else if (Math.abs(dist1) < Math.abs(dist2)) {
    return 'cat1';
  }
  else {
    return 'cat2'
  }
}

// Desafio 8
function fizzBuzz(anotherArray) {
  for (let index in anotherArray) {
    if (anotherArray[index] % 3 === 0 && anotherArray[index] % 5 === 0) {
      anotherArray[index] = 'fizzBuzz'
    }
    else if (anotherArray[index] % 3 === 0) {
      anotherArray[index] = 'fizz'
    }
    else if (anotherArray[index] % 5 === 0) {
      anotherArray[index] = 'buzz'
    }
    else {anotherArray[index] = 'bug!'}
  }
  return anotherArray
}

// Desafio 9
function encode(strToEnconde) {
  strSplit = strToEnconde.split('')
  for (let key in strSplit) {
    if (strSplit[key] === 'a') {
      strSplit[key] = 1
    }
    else if (strSplit[key] === 'e') {
      strSplit[key] = 2
    }
    else if (strSplit[key] === 'i') {
      strSplit[key] = 3
    }
    else if (strSplit[key] === 'o') {
      strSplit[key] = 4
    }
    else if (strSplit[key] === 'u') {
      strSplit[key] = 5
    }
  }
  encodedStr = strSplit.join('')
  return encodedStr
}
function decode(strToDecode) {
  strSplit = strToDecode.split('')
  for (let key in strSplit) {
    if (strSplit[key] === '1') {
      strSplit[key] = 'a'
    }
    else if (strSplit[key] === '2') {
      strSplit[key] = 'e'
    }
    else if (strSplit[key] === '3') {
      strSplit[key] = 'i'
    }
    else if (strSplit[key] === '4') {
      strSplit[key] = 'o'
    }
    else if (strSplit[key] === '5') {
      strSplit[key] = 'u'
    }
  }
  decodedStr = strSplit.join('')
  return decodedStr
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
