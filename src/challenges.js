// Desafio 1
function compareTrue(num1, num2) {
  // seu código aqui
  if (num1 === true && num2 === true) {
    return true;
  }else{
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  areaTotal = (base*height)/2;
  return areaTotal;
}

// Desafio 3
function splitSentence(separando) {
  // seu código aqui
  // referencia https://www.devmedia.com.br/javascript-split-dividindo-separando-strings/39254
separou = separando.split(' ')
return separou;

}

// Desafio 4
function concatName(allNames) {
  let lastName = allNames[allNames.length - 1];
  let fistName = allNames[0];
  return lastName + ', ' + fistName;

  // seu código aqui

}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  pointsWins = wins*3;
  pointsTies = ties*1;
  totalPoints = pointsWins + pointsTies;

  return totalPoints;

}

// Desafio 6
function highestCount(maxCount) {
  // seu código aqui
//identificando maior numero fonte = https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/max
totalShow = 0
bigNumber = Math.max(...maxCount)

for ( let index = 0; index < maxCount.length; index += 1 ){
  if (maxCount[index] === bigNumber) totalShow += 1;
}
return totalShow;
}


// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  var felix = 0;
  var mandaChuva = 0;
  if (mouse >= cat1) {
    felix = mouse - cat1;
  } else {
    felix = cat1 - mouse;
  }
  if (mouse >= cat2) {
    mandaChuva = mouse - cat2;
  } else {
    mandaChuva = cat2 - mouse;
  }
  if (felix < mandaChuva) {
    return 'cat1';
  } else if (mandaChuva < felix) {
    return 'cat2';
  } else {
    return 'os gatos trombam e o rato foge';
  }
}
// Desafio 8
function fizzBuzz(divNumbers) {
  // seu código aqui
  for (let index = 0; index < divNumbers.length; index += 1) {
    if (divNumbers[index] % 3 === 0 && divNumbers[index] % 5 === 0) {
      divNumbers[index] = 'fizzBuzz';
    } else if (divNumbers[index] % 3 === 0) {
      divNumbers[index] = 'fizz';
    } else if (divNumbers[index] % 5 === 0) {
      divNumbers[index] = 'buzz';
    } else {
      divNumbers[index] = 'bug!';
    }
  }
  return divNumbers;
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
