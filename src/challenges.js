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
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(param) {
  let fraseDoParam = param;
  return fraseDoParam.split(' ');
}

// Desafio 4
function concatName(paramDeArray) {
  let primeiroEUltimo = paramDeArray[paramDeArray.length - 1] + ', ' + paramDeArray[0];
  return primeiroEUltimo;
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + ties;
}

// Desafio 6
function highestCount(paramArrayNum) {
  let maiorNumero = Math.max.apply(null, paramArrayNum);
  let quantidade = 0;
  for(index = 0; index < paramArrayNum.length; index += 1){
    if (maiorNumero === paramArrayNum[index]){
    quantidade = quantidade + 1;
    }
  }
  return quantidade;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
   if (cat1 === cat2 || (cat1 + cat2) === mouse) {
     return 'os gatos trombam e o rato foge'
   } else if ( cat1 > cat2){
     return 'cat2'
   }else {
     'cat1'
   }
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
