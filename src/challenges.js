// Desafio 1
function compareTrue(val1, val2) {
  if (val1 === true && val2 === true) {
    return true
  } else {
    return false
  }
}

// Desafio 2
function calcArea(base, height) {
  let area = (base*height) / 2
  return area
}

// Desafio 3
function splitSentence(frase) {
  let split = []
  let words = ''
  for (let letter of frase) {
    if (letter != " ") {
      words += letter
    } else {
      split.push(words)
      words = ""
    }
  }
  split.push(words)
  return split
}

// Desafio 4
function concatName(itens) {
  return (itens[itens.length -1] + ', ' + itens[0])
}

// Desafio 5
function footballPoints(wins, ties) {
  let points = (wins * 3) + (ties * 1)
  return points
}

// Desafio 6
function highestCount(num) {
  maiorNum = num[0]
  maiorCont = 0
  for (let index = 0; index < num.length; index += 1) {
    if (maiorNum < num[index]) {
      maiorNum = num[index]
    }
  }
  for (let index = 0; index < num.length; index += 1){
    if (maiorNum === num[index]) {
      maiorCont +=1
    }
  }
  return maiorCont
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
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
