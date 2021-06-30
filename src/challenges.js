// Desafio 1
function compareTrue(value1, value2) {
  return (value1 && value2);
}

// Desafio 2
function calcArea(base, height) {
  let area = base*height/2;
  return area;
}

// Desafio 3
function splitSentence(mergedSentence) {
  let splitSentence = mergedSentence.split(" ");
  return splitSentence;
}

// Desafio 4
function concatName(array=['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']) {
  concatName = (array[(array.length-1)] + ", " + array[0]);
  return(concatName);
}

// Desafio 5
function footballPoints(wins, ties) {
  let footballPoints = 3*wins + ties;
  return footballPoints;
}

// Desafio 6
function highestCount(numeros) {
  let indiceMaior = 0;
  for (let indice in numeros) {
    if (numeros[indiceMaior] < numeros[indice]) {
      indiceMaior = indice;
    }
  }
  let verificaNumero = numeros[indiceMaior];
  let contNumero = 0;
  for (let index2 in numeros) {
      if (verificaNumero === numeros[index2]) {
        contNumero += 1;
      }
    }
  return contNumero
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distMouseCat1 = (mouse - cat1)**2;
  let distMouseCat2 = (mouse - cat2)**2;
  
  if (distMouseCat1 < distMouseCat2) {
    return ("cat1");
  }
  else {
    if (distMouseCat2 < distMouseCat1) {
      return ("cat2");
    }
    else { return ("os gatos trombam e o rato foge")}
  }
}

// Desafio 8
function fizzBuzz(numeros) {
  let fizzbuzzbug = [];
  for (let numero in numeros) {
    if (numeros[numero]%3 === 0 && numeros[numero]%5 !== 0) {
      fizzbuzzbug.push("fizz");
    }
    else {
      if (numeros[numero]%5 === 0 && numeros[numero]%3 !== 0) {
        fizzbuzzbug.push("buzz");
      }
      else {
        if (numeros[numero]%5 === 0 && numeros[numero]%3 === 0) {
          fizzbuzzbug.push("fizzBuzz");
        }
        else { fizzbuzzbug.push("bug!");}
      }
    }
  }
  return fizzbuzzbug;
}

// Desafio 9
function encode(str1ng) {
  let encodedString = str1ng.split("");
  for (let aux = 0 ; aux <= str1ng.length -1 ; aux += 1) {
    //console.log(str1ng[aux]);
      if (str1ng[aux] === "a") {encodedString[aux] = "1"}
      else{
        if (str1ng[aux] === "e") {encodedString[aux] = "2"}
        else{
          if (str1ng[aux] === "i") {encodedString[aux] = "3"}
          else{
            if (str1ng[aux] === "o") {encodedString[aux] = "4"}
            else{
              if (str1ng[aux] === "u") {encodedString[aux] = "5"}
              else{
                encodedString[aux] = str1ng[aux]}
              } } } } }

encodedString = encodedString.join("");
return(encodedString);
}

function decode(encodedString) {
  let decodedString = encodedString.split("");
  for (let aux = 0 ; aux <= decodedString.length -1 ; aux += 1) {
      if (encodedString[aux] === "1") {decodedString[aux] = "a"}
      else{
        if (encodedString[aux] === "2") {decodedString[aux] = "e"}
        else{
          if (encodedString[aux] === "3") {decodedString[aux] = "i"}
          else{
            if (encodedString[aux] === "4") {decodedString[aux] = "o"}
            else{
              if (encodedString[aux] === "5") {decodedString[aux] = "u"}
              else{
                decodedString[aux] = encodedString[aux]}
              } } } } }
decodedString = decodedString.join("");
return(decodedString);
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