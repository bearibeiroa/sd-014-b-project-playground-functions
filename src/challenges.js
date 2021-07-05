// Desafio 1
function compareTrue(a,b) {
  // seu código aqui
  if (a && b) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  return (base * height)/2;
}

// Desafio 3
function splitSentence(phrase) {
  // seu código aqui
  return phrase.split(' ',);
}

// Desafio 4
function concatName(arrayString) {
  // seu código aqui
  return arrayString[arrayString.length-1] + ", " + arrayString[0];
}

// Desafio 5
function footballPoints(win, ties) {
  // seu código aqui
  return (win*3) + (ties*1);
}

// Desafio 6
function highestCount(arrayNum) {
  // seu código aqui
  let highNum = 0;
  let count = 0;

  for (let index = 0; index < arrayNum.length; index += 1) {
    
    highNum = Math.max.apply(null, arrayNum);

    for (let index = 0; index < arrayNum.length; index += 1) {
      if (arrayNum[index] === highNum) {
        count += 1;
      }
    }
    return count;    
  }
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  let cat1Pos = Math.abs(mouse-cat1);
  let cat2Pos = Math.abs(mouse-cat2);

  if (cat1Pos < cat2Pos) {
    return 'cat1';
  } else if (cat2Pos < cat1Pos) {
    return 'cat2';
  } else 
    return 'os gatos trombam e o rato foge';
}

// Desafio 8
function fizzBuzz(array) {
  // seu código aqui
  let arrayResp = []

  for (let container of array) {
    if (container%3 == 0 && container%5 == 0) {
      arrayResp.push("fizzBuzz");
    } else if (container%3 == 0) {
      arrayResp.push("fizz");
    } else if (container%5 == 0) {
      arrayResp.push("buzz");
    } else {
      arrayResp.push("bug!");
    }
  }
  return arrayResp;
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
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
