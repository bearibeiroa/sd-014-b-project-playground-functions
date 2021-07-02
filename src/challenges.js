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
  let triangleArea = (base * height) / 2;
  return triangleArea;
}

// Desafio 3
function splitSentence(sentence) {
  let splittedSentence = [];
  let words = '';
  for (let i = 0; i < sentence.length; i += 1) {
    if (sentence[i] !== ' ') {
      words += sentence[i];
    } else {
      splittedSentence.push(words);
      words = '';
    }
  }
  splittedSentence.push(words);
  return splittedSentence;
}

// Desafio 4
function concatName(nameDivided) {
  let firstAndLast = (`${nameDivided[nameDivided.length - 1]}, ${nameDivided[0]}`);
  return firstAndLast;
}

// Desafio 5
function footballPoints(win, tie) {
  let points = ((win * 3) + (tie * 1));
  return points;
}

// Desafio 6
function highestCount() {
  // seu código aqui
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let result = '';
  if ((Math.abs(cat1 - mouse)) < Math.abs(cat2 - mouse)) {
    result = 'cat1';
  } else if ((Math.abs(cat1 - mouse)) > Math.abs(cat2 - mouse)) {
    result = 'cat2';
  } else {
    result = 'os gatos trombam e o rato foge';
  } return result;
}

// Desafio 8
function fizzBuzz(numberToBuzz) {
  let BuzzArray = [];
  for (let numberOfArray of numberToBuzz) {
    if (numberOfArray % 3 === 0 && numberOfArray % 5 === 0) {
      BuzzArray.push('fizzBuzz');
    } else if (numberOfArray % 3 === 0) {
      numberOfArray = 'fizz';
      BuzzArray.push(numberOfArray);
    } else if (numberOfArray % 5 === 0) {
      numberOfArray = 'buzz';
      BuzzArray.push(numberOfArray);
    } else {
      numberOfArray = 'bug!';
      BuzzArray.push(numberOfArray);
    }
  } return BuzzArray;
}
// Desafio 9
function encode(stringToencode) {
  let encodedPhrase = '';
  for (let vogal of stringToencode) {
    if (vogal === 'a') {
      vogal = '1';
      encodedPhrase += vogal;
    } else if (vogal === 'e') {
      vogal = '2';
      encodedPhrase += vogal;
    } else if (vogal === 'i') {
      vogal = '3';
      encodedPhrase += vogal;
    } else if (vogal === 'o') {
      vogal = '4';
      encodedPhrase += vogal;
    } else if (vogal === 'u') {
      vogal = '5';
      encodedPhrase += vogal;
    } else {
      encodedPhrase += vogal;
    }
  }
  return encodedPhrase;
}
// seu código aqui

function decode(stringTodecode) {
  let decodedPhrase = '';
  for (let vogal of stringTodecode) {
    if (vogal === '1') {
      vogal = 'a';
      decodedPhrase += vogal;
    } else if (vogal === '2') {
      vogal = 'e';
      decodedPhrase += vogal;
    } else if (vogal === '3') {
      vogal = 'i';
      decodedPhrase += vogal;
    } else if (vogal === '4') {
      vogal = 'o';
      decodedPhrase += vogal;
    } else if (vogal === '5') {
      vogal = 'u';
      decodedPhrase += vogal;
    } else {
      decodedPhrase += vogal;
    }
  } return decodedPhrase;
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
