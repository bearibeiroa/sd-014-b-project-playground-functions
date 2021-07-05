// Desafio 1
function compareTrue(valor1, valor2) {
  if (valor1 === true && valor2 === true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  let areaTriangulo = ((base * height) / 2);
  return areaTriangulo;
}
console.log(calcArea(10, 50));
console.log(calcArea(5, 2));
console.log(calcArea(51, 1));

// Desafio 3
function splitSentence(string) {
  stringDividida = string.split(" ");
  return stringDividida;
}
console.log(splitSentence("go Trybe"));
console.log(splitSentence("vamo que vamo"));
console.log(splitSentence("foguete"));

// Desafio 4
function concatName(array) {
  let lastArray = array[array.length - 1];
  let firstArray = array[0];
  return lastArray + ", " + firstArray;
}
console.log(concatName(["Lucas", "Cassiano", "Ferraz", "Paolillo"]));
console.log(concatName(['foguete', 'não', 'tem', 'ré']));
console.log(concatName(['captain', 'my', 'captain']));

// Desafio 5
function footballPoints(wins, ties) {
  let points = (wins * 3) + ties;
  return points;
}
console.log(footballPoints(14, 8));
console.log(footballPoints(1, 2));
console.log(footballPoints(0, 0));

// Desafio 6
function highestCount(numbers) {
  maior = 0;
  numeroDeVezes = 0;
  for (let indice in numbers) {
    if (maior < numbers[indice]) {
        maior = numbers[indice];
    }
  }
    for (let indice in numbers) { 
      if (maior === numbers[indice]) {
      numeroDeVezes++;
      }  
  } 
return numeroDeVezes;  
}

console.log(highestCount([9, 1, 2, 3, 9, 5, 7]));
console.log(highestCount([0, 4, 4, 4, 9, 2, 1]));
console.log(highestCount([0, 0, 0]));

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let cat1Position = Math.abs(mouse - cat1);
  let cat2Position = Math.abs(mouse - cat2);
  if (cat1Position < cat2Position) {
    return "cat1";
  } else if (cat2Position < cat1Position) {
    return "cat2";
  } else if (cat1Position === cat2Position) {
    return "os gatos trombam e o rato foge";
  }
}
console.log(catAndMouse(0, 3, 2));
console.log(catAndMouse(10, 4, 22));
console.log(catAndMouse(1, 0, 2));

//console.log(Math.abs(mouse - cat1))

// Desafio 8
function fizzBuzz(arrayDeNumero) {
  let frase = [];
  for (let indice in arrayDeNumero) {
    if (arrayDeNumero[indice] % 3 == 0 && arrayDeNumero[indice] % 5 == 0){
      frase.push("fizzBuzz");
    } else if (arrayDeNumero[indice] % 3 == 0) {
    frase.push("fizz");
    } else if (arrayDeNumero[indice] % 5 == 0) {
    frase.push("buzz");
    } else if (arrayDeNumero[indice] % 3 != 0 && arrayDeNumero [indice] % 5 != 0) {
    frase.push("bug!");
    }
  }
  return frase;
}
console.log(fizzBuzz([2, 15, 7, 9, 45]));
console.log(fizzBuzz([7, 9]));
console.log(fizzBuzz([9, 25]));

// Desafio 9
function encode(string) {
  let encodedString = [];
  for (indice in string) {
    if (string[indice] === "a") {
      encodedString.push("1");
    }else if (string[indice] === "e") {
      encodedString.push("2");
    } else if (string[indice] === "i") {
      encodedString.push("3");
    } else if (string[indice] === "o") {
      encodedString.push("4");
    } else if (string[indice] === "u") {
      encodedString.push("5");
    } else {
      encodedString.push(string[indice]);
    }
  }
  return encodedString.join('');
}
console.log(encode("hi there!"));

function decode(string) {
  let decodedString = [];
  for (indice in string) {
    if (string[indice] === "1") {
      decodedString.push("a");
    }else if (string[indice] === "2") {
      decodedString.push("e");
    } else if (string[indice] === "3") {
      decodedString.push("i");
    } else if (string[indice] === "4") {
      decodedString.push("o");
    } else if (string[indice] === "5") {
      decodedString.push("u");
    } else {
      decodedString.push(string[indice]);
    }
  }
  return decodedString.join('');
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
