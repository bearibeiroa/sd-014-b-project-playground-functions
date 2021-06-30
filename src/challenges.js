// Desafio 1
function compareTrue(value1, value2) {
  return (value1 && value2);
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2 ;
}

// Desafio 3
function splitSentence(Value) {
     return Value.split(" ")
}


// Desafio 4
function concatName(arrayIn) {
arrayIn.splice(0,0, arrayIn[arrayIn.length-1]);
arrayIn.splice(2,arrayIn.length-2);
return arrayIn.join(', ');
}

// Desafio 5
function footballPoints(wins, ties) {
 return ((3 * wins) + ties);
}

// Desafio 6
function highestCount(parameter) {
  let cont = 0; 
  let max = Math.max.apply(null,parameter);
    for (let index = 0; index < parameter.length; index += 1){
      if (parameter[index] === max){
       cont = cont + 1; 
      }
    }
    return(cont)
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
