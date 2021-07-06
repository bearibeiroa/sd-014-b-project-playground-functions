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
function catAndMouse(mouse, cat1, cat2) {
  posCat1 = (mouse - cat1);
  posCat2 = (mouse - cat2);
    if (posCat1 < 0) {
      posCat1 = (posCat1 * (-1));
    } else if (posCat2 < 0) {
      posCat2 = (posCat2 * (-1));
    }
    if (posCat1 < posCat2) {
      return 'cat1';
    } else if (posCat1 === posCat2){
      return 'os gatos trombam e o rato foge';
    } else {
      return 'cat2';
    }
  /*for (let index = 0; index < mousehunt.length; index += 1){
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
  }*/

}

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
  }else{
    newNumbers.push('bug!'); 
  }
}
return newNumbers;
}

// Desafio 9
function encode(convertCode) {
let convertedCode = '';
for (let vogal of convertCode){
  if (vogal === 'a'){
    vogal = '1';
    convertedCode += vogal;
  }else if (vogal === 'e'){
    vogal = '2';
    convertedCode += vogal;
  }else if (vogal === 'i'){
    vogal = '3';
    convertedCode += vogal;
  }else if (vogal === 'o'){
    vogal = '4';
    convertedCode += vogal;
  }else if (vogal === 'u'){
    vogal = '5';
    convertedCode += vogal;
  }else{
    convertedCode += vogal;
  }
}  
  return convertedCode;
}

function decode(desconvertCode) {
  let desconvertedCode = '';
for (let number of desconvertCode){
  if (number === '1'){
    number = 'a';
    desconvertedCode += number;
  }else if (number === '2'){
    number = 'e';
    desconvertedCode += number;
  }else if (number === '3'){
    number = 'i';
    desconvertedCode += number;
  }else if (number === '4'){
    number = 'o';
    desconvertedCode += number;
  }else if (number === '5'){
    number = 'u';
    desconvertedCode += number;
  }else{
    desconvertedCode += number;
  }
}  
  return desconvertedCode;
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
}
