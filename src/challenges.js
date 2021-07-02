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
function fizzBuzz(array) {
  let saida = [];
  let elemento = "";
  for(let index = 0; index <array.length; index +=1){
    if((array[index] % 3 === 0) && (array[index] % 5 != 0)){
      elemento = "fizz";
    } else if ((array[index] % 5) === 0 && (array[index] % 3 != 0)){
      elemento = "buzz";
    } else if ((array[index] % 3 ===0) && (array[index] % 5 === 0)){
      elemento = "fizzBuzz";
    } else {
      elemento = "bug!";
    }
    saida.push(elemento);
  }
  return saida;
}
console.log(fizzBuzz([2, 15, 7, 9, 45]));

// Desafio 9
function encode(string) {
  let newString = '';
  for(let index of string){
    if (index === 'a'){
      newString += 1;
    } else if (index === 'e'){
      newString += 2;
    } else if (index === 'i'){
      newString += 3;
    } else if (index === 'o'){
      newString += 4;
    } else if (index === 'u'){
      newString += 5;
    } else {
      newString += index;
    }
  }
  return newString;
}
console.log(encode("hi there!"))

function decode(reverseVogal) {
  let newStringReverse = '';
  for(let index of reverseVogal){
    if (index === '1'){
      newStringReverse += 'a';
    } else if (index === '2'){
      newStringReverse += 'e';
    } else if (index === '3'){
      newStringReverse += 'i';
    } else if (index === '4'){
      newStringReverse += 'o';
    } else if (index === '5'){
      newStringReverse += 'u';
    } else {
      newStringReverse += index;
    }
  }
  return newStringReverse;
}
console.log(decode("h3 th2r2!"));

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
