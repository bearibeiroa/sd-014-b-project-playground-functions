// Desafio 1
function compareTrue(bool1, bool2) {
  if (bool1 && bool2 == true) {
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
function splitSentence(phrase) {
  let arrayOfStrings = [];
  let currentChar = '';
  let currentWord = '';
  for (let i = 0; i < phrase.length; i += 1) {
    currentChar = phrase[i];
    if (currentChar == ' ') {
      arrayOfStrings.push(currentWord);
      currentWord = '';
    } else {
      currentWord = currentWord + currentChar;
    }
  }
  arrayOfStrings.push(currentWord);

  return arrayOfStrings;
}

// Desafio 4
function concatName(array) {
  return array[array.length - 1] + ', ' + array[0];
}

// Desafio 5
function footballPoints(wins, ties) {
  return wins * 3 + ties;
}

// Desafio 6
function highestCount(numbers) {
  // [9, 1, 2, 3, 9, 5, 7]
  let highestNum = 0;
  let highestNumFrequency = 0;
  let currentNumFrequency = 0;
  let currentNum = 0;

  for (let i = 0; i < numbers.length; i += 1) {
    currentNum = numbers[i]; //9
    for (let j = 0; j < numbers.length; j += 1) {
      if (currentNum == numbers[j]) {
        currentNumFrequency += 1;
      }
    } // 2
    if (i == 0 || currentNum > highestNum) {
      highestNum = currentNum;
      highestNumFrequency = currentNumFrequency;
    }
    currentNumFrequency = 0;
  }
  return highestNumFrequency;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distance1 = 0;
  let distance2 = 0;

  if (cat1 > mouse) {
    distance1 = cat1 - mouse;
  } else {
    distance1 = mouse - cat1;
  }

  if (cat2 > mouse) {
    distance2 = cat2 - mouse;
  } else {
    distance2 = mouse - cat2;
  }

  if (distance1 < distance2) {
    return 'cat1';
  } else if (distance1 > distance2) {
    return 'cat2';
  } else {
    return 'os gatos trombam e o rato foge';
  }
}

// Desafio 8
function fizzBuzz(numbers) {
  let words = [];

  for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] % 5 == 0 && numbers[i] % 3 == 0) {
      words.push('fizzBuzz');
    } else if (numbers[i] % 3 == 0) {
      words.push('fizz');
    } else if (numbers[i] % 5 == 0) {
      words.push('buzz');
    } else {
      words.push('bug!');
    }
  }
  return words;
}

// Desafio 9
function encode(message) {
  let codedMessage = '';

  for (let i of message) {
    switch (i) {
      case 'a':
        codedMessage += '1';
        break;
      case 'e':
        codedMessage += '2';
        break;
      case 'i':
        codedMessage += '3';
        break;
      case 'o':
        codedMessage += '4';
        break;
      case 'u':
        codedMessage += '5';
        break;
      default:
        codedMessage += i;
    }
  }
  return codedMessage;
}

function decode(message) {
  let decodedMessage = '';

  for (let i of message) {
    switch (i) {
      case '1':
        decodedMessage += 'a';
        break;
      case '2':
        decodedMessage += 'e';
        break;
      case '3':
        decodedMessage += 'i';
        break;
      case '4':
        decodedMessage += 'o';
        break;
      case '5':
        decodedMessage += 'u';
        break;
      default:
        decodedMessage += i;
    }
  }
  return decodedMessage;
}

//Desafio 10 --
function techList(tech, name) {
  let techsToLearn = [];
  tech.sort();

  if (tech.length === 0) {
    return 'Vazio!';
  } else {
    for (let index of tech) {
      techsToLearn.push({
        tech: index,
        name: name,
      });
    }
  }
  return techsToLearn;
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
