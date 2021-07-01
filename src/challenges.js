// Desafio 1
function compareTrue(value1, value2) {
  if(value1 === true && value2 === true){
    return true;
  }else{
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  let triangle = (base * height)/2;
  return triangle;
}

// Desafio 3
function splitSentence(text) {
  let txt = text.split(' ');
  return txt;
}

// Desafio 4
function concatName(names) {
  let array = [...names]
  let result = [];
  result.push(array[array.length - 1])
  result.push(array[0])
  return result.join(', ');
}

// Desafio 5
function footballPoints(wins, ties) {
  let game = (wins * 3) + ties;
  return game;
}

// Desafio 6
function highestCount(val) {
  let num = [...val];
  let maior = -10000000000;
  let quant = 0;
  for(let index = 0; index < num.length; index += 1){
    if(num[index] > maior){
      maior = num[index];
    }  
  }
  for(let i = 0; i < num.length; i += 1){
    if(maior === num[i]){
      quant += 1;
    }
  }
  return quant;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distCat1 = mouse - cat1;
  let distCat2 = mouse - cat2;
  let distFinal = "";
    if(distCat1 < distCat2){
      distFinal = "cat1";
    }else if(distCat2 < distCat1){
      distFinal = "cat2";
    }else{
      distFinal = "os gatos trombam e o rato foge";
    }
  return distFinal;
}

// Desafio 8
function fizzBuzz(arr) {
  let num = [...arr];
  let fzb = []
  for(let index = 0; index < num.length; index += 1){
    if(num[index]%3 === 0 && num[index]%5 === 0){
      fzb.push("fizzBuzz");
    }else if(num[index]%5 === 0){
      fzb.push("buzz");
    }else if(num[index]%3 === 0){
      fzb.push("fizz")
    }else{
      fzb.push("bug!")
    }
  }
  return fzb
}

// Desafio 9
function encode(str1) {
  let array = [...str1];
  for(let index = 0; index < array.length; index += 1){ 
    if(array[index] === "a"){
      array[index] = 1;
    }else if(array[index] === "e"){
      array[index] = 2;
    }else if(array[index] === "i"){
      array[index] = 3;
    }else if(array[index] === "o"){
      array[index] = 4;
    }else if(array[index] === "u"){
      array[index] = 5;
    }
  }
  return array.join('',',')
}

function decode(str2) {
  
  let array2 = [...str2];
  for(let index = 0; index < array2.length; index += 1){ 
    if(array2[index] === "1"){
      array2[index] = "a";
    }else if(array2[index] === "2"){
      array2[index] = "e";
    }else if(array2[index] === "3"){
      array2[index] = "i";
    }else if(array2[index] === "4"){
      array2[index] = "o";
    }else if(array2[index] === "5"){
      array2[index] = "u";
    }
  }
  return array2.join('',',')
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
