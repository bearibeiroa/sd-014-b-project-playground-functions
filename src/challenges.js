// Desafio 1
function compareTrue(a, b) {
  let compare = true;
  if (a && b === true) {
    compare = true;
  } else {
    compare = false;
  }
  return compare;
  // seu código aqui
}
console.log(compareTrue(true, true));
console.log(compareTrue(false, true));
console.log(compareTrue(true, false));
console.log(compareTrue(false, false));

// Desafio 2
function calcArea(base, height) {
  let area = (base * height)/2;
  return area;
}
console.log(calcArea(10, 50));
console.log(calcArea(5, 2));
console.log(calcArea(51, 1));

// Desafio 3
function splitSentence(string) {
  let palavra = string.split(' ');
  return palavra;
}
console.log(splitSentence('go Trybe'));
console.log(splitSentence('vamo que vamo'));
console.log(splitSentence('foguete'));

// Desafio 4
function concatName(array) {
  let sum = [];
  for (let i = 0; i < array.length; i++) {
    sum = sum += array[i];
  }
  return sum;
}
console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));
console.log(concatName(['foguete', 'não', 'tem', 'ré']));
console.log(concatName(['captain', 'my', 'captain']));

// Desafio 5
function footballPoints(wins, ties) {
  let pontos = (wins * 3) + ties;  
  return pontos;
}
console.log(footballPoints(14, 8));
console.log(footballPoints(1, 2));
console.log(footballPoints(0, 0));

// Desafio 6
function highestCount(array) {
  let contNumero = 0;
  let contRepetido = 0;
  let indexNumeroRepetido = 0;
    for (let i in array) {
        let verificaNumero = array[i];
        for (let j in array) {
            if (verificaNumero === array[j]) {
                contNumero += 1;
            }
        }
        if (contNumero > contRepetido) {
            contRepetido = contNumero;
            indexNumeroRepetido = i;
        }
        contNumero = 0;
    }
    return array[indexNumeroRepetido];
}
console.log(highestCount([9, 1, 2, 3, 9, 5, 7]));
console.log(highestCount([0, 4, 4, 4, 9, 2, 1]));
console.log(highestCount([0, 0, 0]));

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let maisPerto;
  if((cat1 - mouse) < (cat2 - mouse)) {
    maisPerto = "cat1";
  } else if (cat1 === cat2) {
    maisPerto = "os gatos trombam e o rato foge";
  } else {
    maisPerto = "cat2";
  }
  return maisPerto;
}
console.log(catAndMouse(0, 3, 2));
console.log(catAndMouse(0, 6, 12));
console.log(catAndMouse(0, 2, 2));

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode(string) {
  let vogal = ['a', 'e', 'i', 'o', 'u'];
  let valor = ['1', '2', '3', '4', '5']
  let letra = string.split('');
  for (let i in letra) {
    letra[i] === vogal[i]
  }
  return res;
/*
a -> 1
e -> 2
i -> 3
o -> 4
u -> 5
*/
}
console.log(encode("hi there!"))
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
