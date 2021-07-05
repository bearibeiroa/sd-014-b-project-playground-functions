// Desafio 1
function compareTrue(value1, value2) {
  if (value1 === true && value2 === true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  let result = ((base * height) / 2);
  return result;
}

// Desafio 3
function splitSentence(sentenca) {
  let result = sentenca.split(' ');
  return (result);
}

// Desafio 4
function concatName(names) {
  let concaLastName = names[names.length - 1];
  let concaFirstName = names[0];
  return (concaLastName + ', ' + concaFirstName);
}

// Desafio 5
function footballPoints(wins, ties) {
  let winnerpoints = (wins * 3);
  let tiespoints = (ties * 1);
  let total = (winnerpoints + tiespoints);
  return (total);
}

// Desafio 6
// função apply extraída do site https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Function/apply
function highestCount(contador) {
  let contMaior = Math.max.apply(null, contador);
  let contTotal = 0;
  for (let index = 0; index < contador.length; index += 1){
    if (contMaior === contador[index]) {
      contTotal = contTotal + 1;
    }
  }
  return contTotal;
}

// Desafio 7
function catAndMouse(mousehunt) {
  /* let posCat1 = 0;
  let posCat2 = 0;
  let posMouse = 0;
  for (let index = 0; index < mousehunt.length; index += 1){
    if (mousehunt[index] === "cat1"){
      posCat1 = mousehunt.index
    }else if (mousehunt[index] === "cat2"){
    posCat2 = mousehunt.index;
    }else if(mousehunt[index] === "mouse"){
      posMouse = mousehunt.index;
    }
  }
  if ((posMouse - posCat1) < (posMouse - posCat2)){
    return ("cat1")
  }else if ((posMouse - posCat1) > (posMouse - posCat2)){
    return ("cat2");
  }else{
    return ("os gatos trombam e o rato foge");
  }
} */

// Desafio 8
function fizzBuzz(arrayNumbers) {
  let newNumbers = [];
  for(index = 0; index < arrayNumbers.length; index += 1){
    if (arrayNumbers[index]%3 === 0 && arrayNumbers[index]%5 === 0){
      newNumbers.push('fizzBuzz')
    }else if(arrayNumbers[index]%3 === 0){
      newNumbers.push('fizz');
    }else if(arrayNumbers[index]%5 === 0){
      newNumbers.push('buzz');
    } else {
      newNumbers.push('bug!'); 
    }
  }
  return newNumbers;
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
