// Desafio 1
function compareTrue(valor1, valor2) {
  // seu código aqui
  if (valor1 === true && valor2 === true){
    return true;
  }else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  let result = (base * height) / 2;
  return result;
}

// Desafio 3
function splitSentence(string) {
  // seu código aqui
  let arrayString = string.split(" ");
  return arrayString;
}

// Desafio 4
function concatName(arrayNomes) {
  // seu código aqui
  let result = arrayNomes[arrayNomes.length - 1]+ "," + " " + arrayNomes[0];
  return result  
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let sum = (wins * 3) + ties;
  return sum;
}

// Desafio 6
function highestCount(numeros) {
  // seu código aqui
  let maiorNumero = numeros[0];
  let contador = 0;
  for (let index of numeros) {
    if (index > maiorNumero){
      maiorNumero = index;
    }
  }
  for (let index of numeros){
    if (maiorNumero === index){
      contador += 1;
    }
  }
      return contador;
  }
  
// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  let resultCat1 = cat1 - mouse;
  let resultCat2 = cat2 - mouse;

  if (Math.abs(resultCat1) < Math.abs(resultCat2)){
    return "cat1";
  }else if (Math.abs(resultCat2) < Math.abs(resultCat1)){
    return "cat2";
  }else {
    return "os gatos trombam e o rato foge";
  }
}



// Desafio 8
function fizzBuzz(numeros) {
  // seu código aqui
  result = [];
  for (let index = 0; index < numeros.length; index += 1){
    if (numeros[index] % 3 === 0 && numeros[index] % 5 === 0){
      result.push("fizzBuzz");
    }else if (numeros[index] % 3 === 0) {
      result.push("fizz");
    }else if (numeros[index] % 5 === 0 ) {
      result.push("buzz");
    }else {
      result.push("bug!");
    }
  }
  return result;
}


// Desafio 9
function encode(string) {
  // seu código aqui
  let newString = "";
for (let index = 0; index < string.length; index += 1){
  if (string[index] === "a"){
    newString += 1;
  }else if (string[index] === "e"){
    newString += 2;
  }else if (string[index] === "i"){
    newString += 3;
  }else if (string[index] === "o"){
    newString += 4;
  }else if (string[index] === "u"){
    newString += 5;
  }else {
    newString += string[index];
    } 
  }
  return newString;
}


function decode(string) {
  // seu código aqui
  let newString = "";
  for (let index = 0; index < string.length; index += 1){
    if (string[index] === "1"){
      newString += "a";
    }else if (string[index] === "2"){
      newString += "e";
    }else if (string[index] === "3"){
      newString += "i";
    }else if (string[index] === "4"){
      newString += "o";
    }else if (string[index] === "5"){
      newString += "u";
    }else {
      newString += string[index];
      } 
    }
    return newString;
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
