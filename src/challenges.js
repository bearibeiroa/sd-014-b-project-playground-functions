// Desafio 1
function compareTrue(valueA, valueB) {
  if (valueA === true && valueB === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  let areaTriangulo = (base * height) / 2;
  return areaTriangulo;
}

// Desafio 3
function splitSentence(phrase) {
  let phrase2 = phrase.split(' ');
  return phrase2;
}

// Desafio 4
function concatName(arrayStrings) {
  let result = arrayStrings[arrayStrings.length - 1] + ', ' + arrayStrings[0];
  return result;
}

// Desafio 5
function footballPoints(wins, ties) {
  let result = wins * 3 + ties;
  return result;
}

// Desafio 6
function highestCount(arrays) {
  let maxNumber = Math.max(...arrays);
  let result = 0;
  for (let index = 0; index < arrays.length; index += 1) {
    if (arrays[index] === maxNumber) {
      result += 1;
    }
  }
  return result;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if (Math.abs(cat1 - mouse) < Math.abs(cat2 - mouse)) {
    return 'cat1';
  } else if (Math.abs(cat1 - mouse) > Math.abs(cat2 - mouse)) {
    return 'cat2';
  } else Math.abs(cat1 - mouse) === Math.abs(cat2 - mouse);
  return 'os gatos trombam e o rato foge';
}

// Desafio 8
function fizzBuzz(arrayNumber) {
  let result = [];
  for(let index = 0; index <arrayNumber.length; index+=1){
    if(arrayNumber[index] % 3 === 0 && arrayNumber[index] % 5 === 0){
      result.push('fizzBuzz');
    } else if (arrayNumber[index] % 3 === 0){
      result.push('fizz');
    }else if (arrayNumber[index] % 5 === 0){
      result.push('buzz');
    } else {
      result.push('bug!');
    }
  }
  return result;
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
