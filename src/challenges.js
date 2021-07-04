// Desafio 1
function compareTrue(a, b) {
  if (a === true && b === true) {
    return true;
  }
  else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  let result = (base * height) / 2;
  return result;
}

// Desafio 3
function splitSentence(word) {
  let result = word.split(" ")
  return result;
}

// Desafio 4
function concatName(array) {
  let result = [];
  result.unshift(array[0]);
  result.unshift(array[array.length - 1]);
  return result[0] + ", " + result[result.length - 1];
}

// Desafio 5
function footballPoints(wins, ties) {
  let result = 0;

  for (let i = 1; i <= wins; i += 1) {

    if (wins === 0) {
      break;
    }

    result += 3;

  }

  for (let i = 1; i <= ties; i += 1) {

    if (ties === 0) {
      break;
    }

    result += 1;
  }

  return result;
}

// Desafio 6
function highestCount(array) {
  let result = 0;
  let aux = 0;

  for (let i = 0; i < array.length; i += 1) {

    if (i === 0) {
      aux = array[i];
    }

    if (array[i] > aux) {
      aux = array[i];
    }
  }

  for (let i = 0; i < array.length; i += 1) {

    if (array[i] === aux) {
      result += 1;
    }
  }

  return result;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let a = mouse - cat1; // a = -3 ~ b = -2 
  let b = mouse - cat2; // a = 6 ~ b = -12
                        // a = 1 ~ b = -1

  if (Math.abs(a) === Math.abs(b)) { // se os valores absolutos forem iguais, a distância é a mesma
    return "os gatos trombam e o rato foge"
  } else if (mouse - a < mouse - b) {
    return "cat1";
  } else if (mouse - b < mouse - a) {
    return "cat2";
  }
}

// Desafio 8
function fizzBuzz(array) {
  let result = [];

  for (let i = 0; i < array.length; i += 1) {
    if (array[i] % 3 === 0 && array[i] % 5 === 0) {
      result.push("fizzBuzz");
    } else if (array[i] % 3 === 0 && array[i] % 5 != 0) {
      result.push("fizz");
    } else if (array[i] % 5 === 0 && array[i] % 3 != 0) {
      result.push("buzz");
    } else if (array[i] % 3 != 0 && array[i] % 5 != 0) {
      result.push("bug!");
    }
  }
  return result;
}

// Desafio 9
function encode(phrase) {

  phrase = phrase.split("");

  for (let i = 0; i < phrase.length; i += 1) {
    if (phrase[i] === 'a') {
      phrase[i] = '1';
    }

    if (phrase[i] === 'e') {
      phrase[i] = '2';
    }

    if (phrase[i] === 'i') {
      phrase[i] = '3';
    }

    if (phrase[i] === 'o') {
      phrase[i] = '4';
    }

    if (phrase[i] === 'u') {
      phrase[i] = '5';
    }
    
  }

  return phrase.join("");
  
}

function decode(phrase) {

  phrase = phrase.split("");

  for (let i = 0; i < phrase.length; i += 1) {
    if (phrase[i] === '1') {
      phrase[i] = 'a';
    }

    if (phrase[i] === '2') {
      phrase[i] = 'e';
    }

    if (phrase[i] === '3') {
      phrase[i] = 'i';
    }

    if (phrase[i] === '4') {
      phrase[i] = 'o';
    }

    if (phrase[i] === '5') {
      phrase[i] = 'u';
    }
    
  }

  return phrase.join("");

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
