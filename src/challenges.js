// Desafio 1
function compareTrue(value1, value2) {
  if (value1 === true && value2 === true) {
    return true;
  } return false;
} 

// Desafio 2
function calcArea(base, altura) {
  let areaTriangulo = (base * altura) / 2;
  return areaTriangulo;
};

// Desafio 3
function splitSentence(string) {
  let resultado = string.split(' ');
  return resultado;
};

// Desafio 4
function concatName(array) {
  let concate = array[array.length - 1] + ', ' + array[0];
  return concate;
};

// Desafio 5
function footballPoints(wins, ties) {
  let winPoints = 3 * wins;
  let tiePoints = ties;
  let totalPoints = winPoints + tiePoints;
  return totalPoints;
};

// Desafio 6
function highestCount(array) {
  let highNumber = Math.max.apply(null, array);
  let numberCount = 0;
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] === highNumber) {
      numberCount += 1;
    }
  }
  return numberCount;
};

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
 let rangeCat1 = mouse - cat1;
 let rangeCat2 = mouse - cat2;
  
 if ( Math.abs(rangeCat1) === Math.abs(rangeCat2)) {
    return 'os gatos trombam e o rato foge';
  } else if (Math.abs(rangeCat1) < Math.abs(rangeCat2)) {
    return 'cat1';
  } else { (Math.abs(rangeCat2) < Math.abs(rangeCat1));
    return 'cat2';
  };
}; 
 
// Desafio 8
function fizzBuzz(array) {
  let resultado = [];
  for (let index of array) {
    if (index % 3 === 0 && index % 5 === 0){ 
    resultado.push('fizzBuzz');
      } else if ((index % 5 === 0)) {
    resultado.push('buzz');
      } else if ((index % 3 === 0) ){
    resultado.push('fizz');
      } else {
    resultado.push('bug!');
      };
    } return resultado;  
};
  
// Desafio 9
function encode(palavra) {
  let letras = [];
  for (let letra of palavra){
    letras.push(letra);
  }
  for (let index = 0; index < letras.length; index += 1) {
      if (letras[index] === 'a') {
        letras[index] = '1';
      } else if (letras[index] === 'e') {
        letras[index] = '2';
      } else if (letras[index] === 'i') {
        letras[index] = '3';
      } else if (letras[index] === 'o') {
        letras[index] = '4';
      } else if (letras[index] === 'u') 
        letras[index] = '5';
    }
    return letras.join('');
  }; console.log(encode('boa noite pessoal'))
      
function decode(palavra) {
  let numbers = [];
  for (let number of palavra){
    numbers.push(number);
  }
  for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] === '1') {
      numbers[index] = 'a';
    } else if (numbers[index] === '2'){
      numbers[index] = 'e';
    } else if (numbers[index] === '3'){
        numbers[index] = 'i';
    } else if (numbers[index] === '4'){
        numbers[index] = 'o';
    } else if (numbers[index] === '5'){
        numbers[index] = 'u';
    };
   };
   return numbers.join('');
}; console.log(decode('b41 n43t2 p2ss41l')) .

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
