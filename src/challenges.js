// Desafio 1
function compareTrue(param1, param2) {
  if (param1 === true && param2 === true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(string) {
  return string.split(' ');
}
//referencias .split: https://www.w3schools.com/jsref/jsref_split.asp e https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/split

// Desafio 4
function concatName() {
  // seu código aqui
}

// Desafio 5
function footballPoints(wins, ties) {
  let pointsResult = (wins * 3) + ties;
  return pointsResult;
}

// Desafio 6
function highestCount(listNumber) {

  let number = Math.max.apply(null, listNumber);
  let contador = 0;

  for (let index = 0; index < listNumber.length; index += 1) {
    if (number === listNumber[index]) {
      contador += 1;
    }
  }
  return contador;
}
// referencia Math.max.apply: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {

  let cat1Dist= Math.abs(cat1 - mouse); 
  let cat2Dist= Math.abs(cat2 - mouse);

  if (cat2Dist > cat1Dist) {
    return 'cat1';
  } else if (cat2Dist < cat1Dist) {
    return 'cat2';
  } else {
    return 'os gatos trombam e o rato foge';
  }
}
//Referência Math.abs : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/abs

// Desafio 8
function fizzBuzz(list) {
  
  let result = [];

  for (let index= 0; index < list.length; index +=1) {
    if (list[index] % 3 === 0 && list[index] % 5 === 0) {
      result.push("fizzBuzz");
    } else if (list[index] % 3 === 0) {
        result.push("fizz");
    } else if (list[index] % 5 === 0) {
        result.push("buzz");
    } else if (list[index] % 3 !== 0 && list[index] % 5 !== 0) {
        result.push("bug!");
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
