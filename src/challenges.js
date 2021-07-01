// Desafio 1
function compareTrue(parameterA, parameterB) {
  if(parameterA === true && parameterB === true) {
    return true;
    } else {
      return false;
    }
}
//console.log(compareTrue(true, true))

// Desafio 2
function calcArea(base, height) {
  area = (base*height)/2;
  return area;
}
console.log(calcArea(51,1))

// Desafio 3
function splitSentence(frase) {
  novaFrase = frase.split(" ");
  return novaFrase;
}
console.log(splitSentence("go ty be"))

// Desafio 4
//Isso quer dizer que, caso o parâmetro passado para concatName seja a Array ['Lucas', 'Cassiano', 'Ferraz', 'Paolillo'], a função deverá retornar Paolillo, Lucas.

function concatName(frase) {
  // result = frase[frase.length - 1] + frase[0];
  // return result
  result = frase[frase.length - 1]
  result += ", "
  result += frase[0]
  return result
}
//console.log(concatName(['foguete', 'não', 'tem', 'ré']))

// Desafio 5
function footballPoints(wins, ties,) {
  result = (wins*3) + (ties*1)
  return result
  // seu código aqui
}
console.log(footballPoints(14, 8))

// Desafio 6
function highestCount(listNumber) {
//  listNumber = Math.abs(listNumber);
  let higherNumber = 0;
  let countMaior = 0;
  for(let indice of listNumber) {
    if(higherNumber < Math.abs(indice)){
      higherNumber = indice;
    }
  }
//  return higherNumber
  for(let indice2 in listNumber){
    if(higherNumber === listNumber[indice2])
    countMaior +=1;
  }
  return countMaior  
}
//console.log(highestCount([-2, -2, -1, -1]))

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  positionCat1 = Math.abs(mouse - cat1);
  positionCat2 = Math.abs(mouse - cat2);
  resultcat = []; 
  if(positionCat1 < positionCat2){
    return resultcat + "cat1";
  }
  else if (positionCat2 < positionCat1){
    return resultcat + "cat2";
  }
  else if(positionCat1 == positionCat2){
    return resultcat + "os gatos trombam e o rato foge";
  }
}
console.log(catAndMouse(0, 5, 5))

// Desafio 8
function fizzBuzz(listNumber) {
  result = [];
  for(let indice of listNumber) {
    if (indice%3 === 0 && indice%5 === 0){
      result.push("fizzBuzz");
//      result += ", ";
    }
    else if(indice%5 === 0){
      result.push("buzz");
//      result += ", ";
    }
    else if(indice%3 === 0){
      result.push("fizz");
//      result += ", ";
    }
    else if (indice%3 !== 0 && indice%5 !== 0){
      result.push("bug!");
//      result += ", ";
    }
  }
return result
}
console.log(fizzBuzz([2, 15, 7, 9, 45]))


// Desafio 9
function encode(text) {
  // seu código aqui 
  //referencia .replace https://www.w3schools.com/jsref/jsref_replace.asp
  // referencia .join https://metring.com.br/javascript-converter-array-em-string
  let textModfy = [];
  for(let indice = 0; indice < text.length; indice +=1){
    if (text[indice] == "a"){
      textModfy[indice] = text[indice].replace("a", "1");
    }
    else if(text[indice] == "e"){
      textModfy[indice] = text[indice].replace("e", "2");
    }
    else if(text[indice] == "i"){
      textModfy[indice] = text[indice].replace("i", "3");
    }
    else if(text[indice] == "o"){
      textModfy[indice] = text[indice].replace("o", "4");
    }
    else if(text[indice] == "u"){
      textModfy[indice] = text[indice].replace("u", "5");
    }
    else{
      textModfy[indice] = text[indice];
    }
  }
return textModfy.join('');
}
console.log(encode("hello"))
//---------------------------------//
function decode() {
  // seu código aqui
  let textModfy = [];
  for(let indice = 0; indice <text.length; indice +=1){
    if (text[indice] == "1"){
      textModfy[indice] = text[indice].replace("1", "a");
    }
    else if(text[indice] == "2"){
      textModfy[indice] = text[indice].replace("2", "e");
    }
    else if(text[indice] == "3"){
      textModfy[indice] = text[indice].replace("3", "i");
    }
    else if(text[indice] == "4"){
      textModfy[indice] = text[indice].replace("4", "o");
    }
    else if(text[indice] == "5"){
      textModfy[indice] = text[indice].replace("5", "u");
    }
    else{
      textModfy[indice] = text[indice];
    }
  }
return textModfy.join('');
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
