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
  let maxCounter = Math.max.apply(null, numbers); //Math.max.apply foi resultado de uma longa pesquisa nas documentações de "Math"
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
function encode(code) {
  // Código pesquisado e aprendido parcialmente em "MDN Web Docs" rsrs
  let encoded1 = code.replace(/a/g, '1');
  let encoded2 = encoded1.replace(/e/g, '2');
  let encoded3 = encoded2.replace(/i/g, '3');
  let encoded4 = encoded3.replace(/o/g, '4');
  let encoded5 = encoded4.replace(/u/g, '5');
  return encoded5;
  // seu código aqui
}
function decode(code) {
  let encoded1 = code.replace(/1/g, 'a');
  let encoded2 = encoded1.replace(/2/g, 'e');
  let encoded3 = encoded2.replace(/3/g, 'i');
  let encoded4 = encoded3.replace(/4/g, 'o');
  let encoded5 = encoded4.replace(/5/g, 'u');
  return encoded5;
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  encode,
  decode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
