// Desafio 1
function compareTrue(num1, num2) {
  return num1 && num2;
}

// Desafio 2
function calcArea(base, height) {
let area = base*height/2;
return area;
}

// Desafio 3
// Este desafio foi baseado em informações do site: 
//www.w3schools.com/jsref/jsref_split.asp

function splitSentence(string) {
let arrayFrase = string.split (" ");
  return arrayFrase
}

// Desafio 4
function concatName(elementos) {
let arrayElementos = elementos[elementos.length -1] + ", " + elementos[0];
 return arrayElementos; 
}

// Desafio 5
function footballPoints(wins, ties) {
let vitórias = 3;
let empates = 1;
let totalPontos = (vitórias * wins) + (empates * ties)
 return totalPontos;
}

// Desafio 6
function highestCount(numbers) {
let vezesNumero = [];
let maiorNumero = numbers[0];

//encontrando o maior numéro 
for (let index = 1; index < numbers.length; index ++) {

 if(numbers[index] > maiorNumero) {
  maiorNumero = numbers[index]
 }
}

// vezes que o numero se repete
  for (let repete = 0 ; repete < numbers.length; repete ++) {
    if(numbers[repete] == maiorNumero) {
      vezesNumero.push(numbers[repete])
  }
}
return vezesNumero.length
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // calculando distancia entre os ratos e cada um dos gatos
  let positionCat1 = Math.abs(mouse - cat1);
  let positionCat2 = Math.abs(mouse - cat2);

// calculando chegada dos felinos

  if (positionCat1 > positionCat2) {
    return 'cat2';
  } else if (positionCat2 > positionCat1) {
    return 'cat1';
  } else {
    return 'os gatos trombam e o rato foge';
  }

}

// Desafio 8
function fizzBuzz(arrayFizzBuzz) {
  
  let arrayFinal = [];

  for (let index = 0; index < arrayFizzBuzz.length; index ++) {
    if (arrayFizzBuzz[index] % 3 === 0 && arrayFizzBuzz[index] % 5 === 0) {
      arrayFinal.push("fizzBuzz");
    } else if (arrayFizzBuzz[index] % 3 === 0) {
      arrayFinal.push("fizz");
    } else if (arrayFizzBuzz[index] % 5 === 0) {
      arrayFinal.push("buzz");
    } else {
      arrayFinal.push("bug!");
    }
  }
  return arrayFinal;
}

// Desafio 9
function encode(str) {
  let frase ='';

 for (letter of str) {
        if (letter === 'a') {
            frase += '1';
        } else if (letter === 'e') {
            frase += '2';
        } else if (letter === 'i') {
            frase += '3';
        } else if (letter === 'o') {
            frase += '4';
        } else if (letter === 'u') {
            frase += '5';
        } else {
            frase += letter;
        }
    }
    return frase
}
function decode(string) {
  let frase ='';

  for (number of string) {
    if (number === '1') {
        frase += 'a';
    } else if (number === '2') {
        frase += 'e';
    } else if (number === '3') {
        frase += 'i';
    } else if (number === '4') {
        frase += 'o';
    } else if (number === '5') {
        frase += 'u';
    } else {
        frase += number;
    }
}
return frase;
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
