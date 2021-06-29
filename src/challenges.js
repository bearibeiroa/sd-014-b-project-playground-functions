// Desafio 1
function compareTrue(valor1, valor2) {
  if(valor1 && valor2 === true){
    return true;
  }else{
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  return ((base * height) / 2);
}

// Desafio 3
function splitSentence(string) {
  let result = string.split(" ");
  return result;
}


// Desafio 4
function concatName(array) {
  let array2 = "";
  for(let keys = 0; keys <= array.length -1; keys +=1){
      array2 = array[array.length - 1] +", " + array[0];
  }
    return array2;    
}


// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + (ties * 1);
}

// Desafio 6
function highestCount(array) {
  let numeroMaior = Math.max.apply(null, array);
  let contador = 0;
/*  for(let keys in array){
    if(numeroMaior < array[keys]){
      numeroMaior = array[keys];
    }
  } */
  for(let keys in array){
    if(numeroMaior === array[keys]){
      contador += 1;
    } 
  }
  return contador; 
} 
  console.log(highestCount([-9, -2, -2, -3, -2, -2, -11]));
  
  // verificar numero maior
  // quantidade de vezes que o nomero maior aparece


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
