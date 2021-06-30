// Desafio 1
function compareTrue(valueA , valueB) {
  let resultado;
  if(valueA === true && valueB === true) {
    resultado = true;
  } else {
    resultado = false;
  }
  return resultado;
}

// Desafio 2
function calcArea(base , height) {
  return ((base * height) / 2);
}

// Desafio 3
function splitSentence(frases) {
  return (frases.split(" "));
}

// Desafio 4
function concatName(nomes) { 
  return nomes[nomes.length -1] + ', ' + nomes[0];
}

// Desafio 5
function footballPoints(wins , ties) {
  return ((wins * 3) + (ties * 1));
}

// Desafio 6
function highestCount(numbers) {
  let higherNumber = Math.max.apply(null, numbers);
  let countHigherNumber = 0;

  for (let index = 0; index < numbers.length; index +=1){
    if (numbers[index] === higherNumber) {
      countHigherNumber += 1;
    }
  }
  return countHigherNumber;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if(Math.abs(mouse - cat1) > Math.abs(mouse - cat2)) {
    return "cat2";
  } else if (Math.abs(mouse - cat1) < Math.abs(mouse - cat2)) {
    return "cat1";
  } else {
    return 'os gatos trombam e o rato foge'
  }
}

// Desafio 8
function fizzBuzz(numeros) {
  let resultArray = [];

  for (let index = 0; index < numeros.length; index += 1 ) {
    if (((numeros[index] % 5) === 0) && ((numeros[index] % 3) === 0 )){
    resultArray.push ("fizzBuzz");
  } 
    else if ((numeros[index] % 5)=== 0) {
    resultArray.push ("buzz");
  } 
    else if ((numeros[index] % 3) === 0) {
    resultArray.push ("fizz");
  } 
    else {
    resultArray.push 
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
