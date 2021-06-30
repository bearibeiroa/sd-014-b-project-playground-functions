// Desafio 1
function compareTrue(value1, value2) {
  if (value1 === true && value2 ===true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, altura) {
  return (base * altura / 2);
  }

// Desafio 3
function splitSentence(string) {
  return string.split(' ');
}

// Desafio 4
function concatName(array) {
  let ultimoItem = array[array.length-1];
  let primeiroItem = array[0];
  let contatenada = [ultimoItem, primeiroItem];
    return contatenada.join(', ');
  
}

// Desafio 5
function footballPoints(wins, ties) {
  let points = (wins * 3) + ties;
  return points;
}

// Desafio 6
function highestCount(valores) {
let highestNumber = 0
let count = 0

for (let index6 = 0; index6 < valores.length; index6 += 1) {
  if (highestNumber < valores[index6]) {
    highestNumber = valores[index6];
  } else {
      }
 
for (let indexSum6 = 0; indexSum6 < valores.length; indexSum6 += 1) {
  if (highestNumber === valores[indexSum6]) {
    count += 1;    
 } else {
  }
}
}
return count;
}
  

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distCat1 = mouse - cat1;
  if (distCat1 <= 0) {
    distCat1 = distCat1 * -1
    } else {
    }
    
  let distCat2 = mouse - cat2;
  if (distCat2 <= 0) {
    distCat2 = distCat2 * -1
    } else {
    }
  console.log(distCat1);
  console.log(distCat2);

  if (distCat1 < distCat2) {
    return "cat1";
  } else if (distCat2 < distCat1) {
    return "cat2";
  } else {
    return "os gatos trombam e o rato foge";
  }
  
}

// Desafio 8
function fizzBuzz(numbersForB) {
  
  for (let index8 = 0; index < numbersForB.length; index8 += 1) {
    if (numbersForB[index8] % 3 = 0 && numbersForB[index8] % 5 = 0) {
      numbersForB[index] = 'fizzBuzz';
    } else if (numbersForB[index8] % 3 = 0 && numbersForB[index8] % 5 != 0) {
      numbersForB[index8] = 'fizz';
    } else if (numbersForB[index8] % 3 != 0 && numbersForB[index8] % 5 = 0) {
      numbersForB[index8] = 'buzz';
    } else {
      numbersForB[index8] = 'bug!';
    }
  }
  return numbersForB;
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
