// Desafio 1
function compareTrue(value1, value2) {
  if (value1 > 0 && value2 >0){
    return true
  }
  else {
    return false
  }
}
console.log(compareTrue(5, 11));
console.log(compareTrue(-3, 8));

// Desafio 2
function calcArea(base, height) {
  return (base * height)/2
}
console.log(calcArea(10, 50));

// Desafio 3
function splitSentence(frase) {
  return frase.split(" ")
}
console.log(splitSentence("go trybe"));

// Desafio 4
function concatName(lista) {
  let first = lista[0]
  let n = lista.length
  let last = lista[n-1]
  let names = [last, first]
  return names.join(", ")
}
console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));

// Desafio 5
function footballPoints(wins, ties) {
  let points = (wins * 3) + ties
  return points
}
console.log(footballPoints(14, 8));

// Desafio 6
function highestCount(numbers) {  
  
  let maior = 0;
  let contador = 0;
  
  for(let valor of numbers){
    if(Math.abs(valor) > maior){
      maior = valor
    }
  }
  for(let valor2 of numbers){
    if(maior === valor2)
    contador += 1
  }
  return contador
}
console.log(highestCount([9,1,2,3,9,5,7]));

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distCat1 = Math.abs(cat1 - mouse)
  let distCat2 = Math.abs(cat2 - mouse)
  if (distCat1 > distCat2){
    return "cat2"
  } else if ( distCat1 < distCat2){
    return "cat1" 
  } else{
    return "os gatos trombam e o rato foge"
  }
}
console.log(catAndMouse(10, 40, 100));
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
