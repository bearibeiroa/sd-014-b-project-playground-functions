// Desafio 1
function compareTrue(value1, value2) {
  if (value1 === true && value2 === true) {
    return true;
  } else {
    return false;
  }
  // seu código aqui
}

// Desafio 2
function calcArea(base, height) {
  let trianguArea = (base * height) / 2;
   return trianguArea;
  // seu código aqui
}

// Desafio 3
function splitSentence(string) {
   let splitedString = string.split(' ');
   return splitedString;
  // seu código aqui
}

// Desafio 4
function concatName(arrayStrings) {
  let concatString = arrayStrings[arrayStrings.length-1] + ", " + arrayStrings[0];
  return concatString;
  // seu código aqui
}

// Desafio 5
function footballPoints(wins, ties) {
  let totalPoints = 0;
  totalPoints += ((3 * wins) + ties);
  return totalPoints;
  // seu código aqui
}

// Desafio 6
function highestCount(numbers) {
  let maxCounter = Math.max.apply(null, numbers);
  let counter = 0;
  for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] === maxCounter) {
    counter += 1;
    }
  } return counter;
  // seu código aqui
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {

  let cat1Dist = Math.abs(cat1 - mouse);
  let cat2Dist = Math.abs(cat2 - mouse);

  if (cat1Dist > cat2Dist) return 'cat2';

  if (cat1Dist < cat2Dist) return 'cat1';

  return 'os gatos trombam e o rato foge';
  // seu código aqui
}

// Desafio 8
function fizzBuzz(value) {
  let fzBzArray = [];
  for (index = 0; index < value.length; index += 1) {
    let fzBz = value[index];
    if (fzBz % 3 === 0 && fzBz % 5 === 0) {fzBzArray.push("fizzBuzz")};
    if (fzBz % 3 === 0 && fzBz % 5 !== 0) {fzBzArray.push("fizz")};
    if (fzBz % 3 !== 0 && fzBz % 5 === 0) {fzBzArray.push("buzz")};
    if (fzBz % 3 !== 0 && fzBz % 5 !== 0) {fzBzArray.push("bug!")};
  }
  return fzBzArray;
  // seu código aqui
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
