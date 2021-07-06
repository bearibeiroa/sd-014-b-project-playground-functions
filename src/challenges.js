// Desafio 1
function compareTrue(value01, value02) {
  // seu código aqui
  if(value01 && value02) {
    return true
  } else {
    return false
  }
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  return (base * height) / 2
}

// Desafio 3
function splitSentence(splitString) {
  // seu código aqui
  return splitString.split(' ')
}

// Desafio 4
function concatName(nomesVariados) {
  // seu código aqui
  let firstValue = "";
  let lastValue = "";

  for(let index = 0; index < nomesVariados.length; index += 1) {
    firstValue = nomesVariados[0]
    lastValue = nomesVariados[index]
  };

  let inverseConcat = `${lastValue}, ${firstValue}`
  
  return inverseConcat

}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let winsPoints = 3
  let tiesPoints = 1

  let calculateWinsPoints = winsPoints * wins
  let calculateTiesPoints = tiesPoints * ties

  if (calculateWinsPoints > 0 || calculateTiesPoints > 0) {
    return calculateWinsPoints + calculateTiesPoints
  } else {
    return 0
  }

}

// Desafio 6

let numbersCount = [0, 0, 0]

function highestCount(numbersCount) {
  // seu código aqui
  let maiorValor = numbersCount[0];
  let vezesQueRepete = 0

  for(let index = 0; index < numbersCount.length; index += 1) {

    if (numbersCount[index] > maiorValor) {
      maiorValor = numbersCount[index]
    }

  }

  for (let index = 0; index < numbersCount.length; index += 1) {
    if (maiorValor === numbersCount[index]) {
      vezesQueRepete += 1;
    }

  }

  return vezesQueRepete

};

highestCount(numbersCount)


// Desafio 7

function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui

  let distanciaDoCat1 = Math.abs(cat1 - mouse);
  let distanciaDoCat2 = Math.abs(cat2 - mouse);
  let trombaCat1ECat2 = "os gatos trombam e o rato foge";

  if (distanciaDoCat1 < distanciaDoCat2) {
    return "cat1";
  }
  if (distanciaDoCat2 < distanciaDoCat1) {
    return "cat2";
  }
  if (distanciaDoCat1 === distanciaDoCat2) {
    return trombaCat1ECat2;
  }
  
}


// Desafio 8

//const divisiveisOuNao = [2, 15, 7, 9, 45]

function fizzBuzz(divisiveisOuNao) {
  // seu código aqui
  let fizzBuzzArray = []

  for (let index = 0; index < divisiveisOuNao.length; index += 1) {

    if (divisiveisOuNao[index] % 3 > 0 && divisiveisOuNao[index] % 5 > 0) {
      fizzBuzzArray.push("bug!")
    }
    if (divisiveisOuNao[index] % 3 === 0 && divisiveisOuNao[index] % 5 === 0) {
      fizzBuzzArray.push("fizzBuzz")
    }
    if (divisiveisOuNao[index] % 3 === 0 && divisiveisOuNao[index] % 5 > 0) {
      fizzBuzzArray.push("fizz")
    }
    if (divisiveisOuNao[index] % 5 === 0 && divisiveisOuNao[index] % 3 > 0) {
      fizzBuzzArray.push("buzz")
    }

  }

  //console.table(fizzBuzzArray)
  return fizzBuzzArray
}

//fizzBuzz(divisiveisOuNao)

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
