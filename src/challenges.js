// Desafio 1
function compareTrue(valor1, valor2) {
  if(valor1 && valor2 === true){
    return true;
  }else{
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  return ((base * height) / 2);
}

// Desafio 3
function splitSentence(string) {
  let result = string.split(" ");
  return result;
}


// Desafio 4
function concatName(array) {
  let array2 = "";
  for(let keys = 0; keys <= array.length -1; keys +=1){
      array2 = array[array.length - 1] +", " + array[0];
  }
    return array2;    
}


// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + (ties * 1);
}

// Desafio 6
function highestCount(array) {
  let numeroMaior = Math.max.apply(null, array);
  let contador = 0;
/*  for(let keys in array){
    if(numeroMaior < array[keys]){
      numeroMaior = array[keys];
    }
  } */
  for(let keys in array){
    if(numeroMaior === array[keys]){
      contador += 1;
    } 
  }
  return contador; 
} 
 
  
  // verificar numero maior
  // quantidade de vezes que o nomero maior aparece


// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if((cat1 > cat2) && (cat1 > mouse)){
    return "cat2";
  }else if(((cat1 === mouse - 1) && (cat2 === mouse + 1)) || ((cat2 === mouse - 1) && (cat1 === mouse + 1))){
    return "os gatos trombam e o rato foge";
}else {
  return "cat1";
}
}
/* console.log(catAndMouse(6, 1, 7)); */


// Desafio 8
function fizzBuzz(array) {
  let result = [];
  for(let key of array){
    if ((key % 3 === 0) && (key % 5 === 0)){
      result.push("fizzBuzz");
    }else if(key % 3 === 0){
      result.push("fizz");
    }else if(key % 5 === 0){
      result.push("buzz");
    }else{
      result.push("bug!");
    }
  }
  return result;
    // if key % 3
  // if key % 5
  // if key % 3 e 5
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
}
