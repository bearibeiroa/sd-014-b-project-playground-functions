// Desafio 1
function compareTrue(valor1, valor2) {
  if (valor1 === true && valor2 === true){
  
    return true;
  }
  else{
    
    return false;
  }
}
 


// Desafio 2
function calcArea(base,height) {

  return (base * height)/2;
  
}

// Desafio 3
function splitSentence(string) {
  let array = [];
  let words = '';
  
  for (let cont = 0; cont < string.length; cont+=1){
    if(string[cont] != " "){
       words += string[cont];
    }else{
      array.push(words);
       words = '';
    }
    
  } 
  array.push(words)
  return array;
}

// Desafio 4
function concatName(array) {

  let firstTask = array[0];

  let LastTask = array[array.length - 1];

  let newArray = LastTask + ', ' + firstTask;
  return newArray;
}

// Desafio 5
function footballPoints() {
  // seu código aqui
}

// Desafio 6
function highestCount() {
  // seu código aqui
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