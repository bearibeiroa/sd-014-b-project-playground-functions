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
  let firstName = vetor[0];
  let lastName = vetor[vetor.length - 1];
  return `${lastName}, ${firstName}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  let points = ((wins * 3) + ties);
  return points;
}

// Desafio 6
// eslint-disable-next-line sonarjs/cognitive-complexity
function highestCount(values) {
  let biggerNumber = values[0];
  let times = 0;
  for (let index of values) {
    if (index > biggerNumber) {
      biggerNumber = index;
    }
  } for (let index of values) {
    if (biggerNumber === index) {
      times += 1;
    }
  } return times;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui

  if (Math.abs(cat1 - mouse) < Math.abs(cat2 - mouse)) {
    return 'cat1';
  } if (Math.abs(cat2 - mouse) < Math.abs(cat1 - mouse)) {
    return 'cat2';
  }
  return 'os gatos trombam e o rato foge';
}

// Desafio 8
// eslint-disable-next-line complexity
function fizzBuzz(vetor) {
  // seu código aqui
  // eslint-disable-next-line guard-for-in
  let resposta = [];
  for (let index in vetor) {
    if (vetor[index] % 3 === 0 && vetor[index] % 5 === 0) {
      resposta[index] = 'fizzBuzz';
    } else if (vetor[index] % 3 === 0) {
      resposta[index] = 'fizz';
    } else if (vetor[index] % 5 === 0) {
      resposta[index] = 'buzz';
    } else {
      resposta[index] = 'bug!';
    }
  }
  return resposta;
}
console.log(fizzBuzz([2, 15, 7, 9, 45]));

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
