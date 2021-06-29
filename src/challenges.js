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
  // seu código aqui
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
  }// seu código aqui
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
