// Desafio 1
function compareTrue(reposta1, reposta2) {
  // seu código aqui 
  if (reposta1 && reposta2 === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  let answer = ((base * height) / 2);
  return answer;
}

// Desafio 3
function splitSentence(phrase) {
  // seu código aqui
  let vetor = phrase.split(' ');
  return vetor;
}

// Desafio 4
function concatName(vetor) {
  // seu código aqui
  let firstName = vetor[0];
  let lastName = vetor[vetor.length - 1];
  return lastName + ', ' + firstName;
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let points = ((wins * 3) + ties);
  return points;
}



// Desafio 6
function highestCount(values) {
  // seu código aqui
  let biggerNumber = values[0];
  let times = 0;

  for (let index of values) {
    if (index > biggerNumber) {
      biggerNumber = index;
    }
  }
  for (let index of values) {
    if (biggerNumber === index) {
      times += 1;
    }
  }
  return times;
}
console.log(highestCount([-2, -2, -1]))




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
