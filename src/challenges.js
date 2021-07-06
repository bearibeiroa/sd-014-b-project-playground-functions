// Desafio 1
function compareTrue(valor1, valor2) {
  if (valor1 && valor2 === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  let area = ((base * height) / 2);
  return area;
}

// Desafio 3
function splitSentence(text) {
  return text.split(' ');
}

// Desafio 4
function concatName(names) {
  let firstName = names[0];
  let lastName = names[names.length - 1];
  let adicionando = (lastName + ', ' + firstName);
  return adicionando;
}

// Desafio 5
function footballPoints(wins, ties) {
  let pontos = ((wins * 3) + (ties));
  return pontos;
}

// Desafio 6
function highestCount(numberArray) {
  let index = 0;
  let maiorNum = numberArray[0];
  for (let index1 = 0; index1 < numberArray.length; index1 +=1) {
    let num = numberArray[index1];
    if (num >= maiorNum) {
      maiorNum = num;
    }
  }
  for (let index2 = 0; index2 < numberArray.length; index2 +=1) {
    if (maiorNum === numberArray[index2]) {
      index +=1;
    }
  }
  return index;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanciaMouseCat1 = Math.abs(mouse - cat1);
  let distanciaMouseCat2 = Math.abs(mouse - cat2);
  if (distanciaMouseCat1 > distanciaMouseCat2) {
    return 'cat2';
  } else if (distanciaMouseCat2 > distanciaMouseCat1) {
    return 'cat1';
  }
  else {return "os gatos trombam e o rato foge";
}
}

// Desafio 8
function fizzBuzz() {
}

// Desafio 9
function encode() {
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
