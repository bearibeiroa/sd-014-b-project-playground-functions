// Desafio 1
function compareTrue(valor1, valor2) {
  if (valor1 === true && valor2 === true)return true;
  else return false;
}

// Desafio 2
function calcArea(base,height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(frase) {
  let quebraFrase = frase.split(" ");
  return quebraFrase;
}

// Desafio 4
function concatName(names) {
let array = [...names];
let result = [];
result.push(array[array.length - 1]);
result.push(array[0]);
return result.join(', ');
}

// Desafio 5
function footballPoints (wins,ties) {
return wins * 3 + ties;
}

// Desafio 6
function highestCount(arrayNumbers) {
  let count = 0;
  let arraySorted = arrayNumbers.sort(function (a, b) {
    return a - b;
  });
  let highestNumber = arraySorted[arraySorted.length - 1];
  for (let number of arrayNumbers) {
    if (number >= highestNumber) {
      count += 1;
    }
  }
  return count;
}
// Desafio 7
function catAndMouse(mouse,cat1, cat2) {
  if(cat1 > cat2 && cat1 > mouse && (cat1 - mouse) > (mouse - cat2)) {
    return "cat2";
  }else if(cat2 > cat1 && cat2 > mouse && (cat2 - mouse) > (mouse - cat1)){
    return "cat1";
  }else{
    return "os gatos trombam e o rato foge";
  }
}


// Desafio 8
function fizzBuzz(array) {
let resultado = [];
for (let i = 0; i < array.length; i += 1) {
  if (array[i] % 3 === 0 && array[i] % 5 !== 0) {
    resultado.push('fizz');
  } else if (array[i] % 5 === 0 && array[i] % 3 !== 0) {
    resultado.push('buzz');
  } else if (array[i] % 5 === 0 && array[i] % 3 === 0) {
    resultado.push('fizzBuzz');
  } else {
    resultado.push('bug!');
  }
} return resultado;
}

// Desafio 9
function encode(string) {
  string = string.replace(/a/g, "1");
  string = string.replace(/e/g, "2");
  string = string.replace(/i/g, "3");
  string = string.replace(/o/g, "4");
  string = string.replace(/u/g, "5");
  return string;
}
function decode(string) {
  string = string.replace(/1/g, "a");
  string = string.replace(/2/g, "e");
  string = string.replace(/3/g, "i");
  string = string.replace(/4/g, "o");
  string = string.replace(/5/g, "u");
  return string;
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
splitSentence
}
