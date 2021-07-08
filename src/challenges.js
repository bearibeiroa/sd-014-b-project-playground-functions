// Desafio 1
function compareTrue(num1, num2) {
  // seu código aqui
  if (num1 === true && num2 === true) {
    return true;
  }else{
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  areaTotal = (base*height)/2;
  return areaTotal;
}

// Desafio 3
function splitSentence(separando) {
  // seu código aqui
  // referencia https://www.devmedia.com.br/javascript-split-dividindo-separando-strings/39254
separou = separando.split(' ')
return separou;

}

// Desafio 4
function concatName(allNames) {
  let lastName = allNames[allNames.length - 1];
  let fistName = allNames[0];
  return lastName + ', ' + fistName;

  // seu código aqui

}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  pointsWins = wins*3;
  pointsTies = ties*1;
  totalPoints = pointsWins + pointsTies;

  return totalPoints;

}

// Desafio 6
function highestCount(maxCount) {
  // seu código aqui
//identificando maior numero fonte = https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/max
totalShow = 0
bigger = Math.max(maxCount);
//contagem de repetição
for(let index = 0; index <= maxCount.length; index ++)
if (index = bigger){
  total++;
}
return total;
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
