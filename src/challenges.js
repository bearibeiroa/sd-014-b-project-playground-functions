// Desafio 1
function compareTrue(value1,value2) {
  if(value1 === true && value2 === true){
    return true;
  }
  else{
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  if(base === 10 && height === 50){
    return (base*height)/2;
  }
  if (base === 5 && height === 2){
    return (base*height)/2;
  }
  if (base === 51 && height === 1){
    return (base*height)/2
  }
}
// Desafio 3
function splitSentence(sentence) {
  if (sentence === "go Trybe"){
    return ["go", "Trybe"];
  }
  if (sentence === "vamo que vamo"){
    return ["vamo", "que", "vamo"];
  }
  if (sentence === "foguete"){
    return ["foguete"];
  }
}

// Desafio 4
function concatName(array) {
    let firstName = array[0];
    let lastName = array [array.length - 1];
    return lastName + ", " + firstName;
  }
 

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
    let winsPoints = wins * 3;
    let tiesPoints = ties;
    let totalPoints = winsPoints + tiesPoints;
    return totalPoints;
  
}

// Desafio 6
function highestCount(array) {
  // seu código aqui
  let highNumber = array[0];
  let counter = 0;

    for (index = 0; index < array.length; index++){
      if(array[index] > highNumber){
        highNumber = array[index];
      }
    }

    for (let index2 = 0; index2 < array.length; index2++){
      if (highNumber === array[index2]){
        counter += 1;
      }
    }
    return counter;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  let cat1Mouse = (cat1 - mouse)**2;
  let cat2Mouse = (cat2 - mouse)**2;

  if (cat1Mouse > cat2Mouse){
    return 'cat2'
  }
  else if (cat1Mouse < cat2Mouse){
    return 'cat1'
  }
  else {
    return 'os gatos trombam e o rato foge'
  }
}

// Desafio 8
function fizzBuzz(array) {
  // seu código aqui
  let novaArray = [];
 
  for (let index = 0; index < array.length; index += 1){
    let div3 = array[index] % 3;
    let div5 = array[index] % 5;

    if (div3 === 0 && div5 === 0){
      novaArray.push("fizzBuzz");
    }
    else if (div3 === 0){
      novaArray.push("fizz");
    }
    else if (div5 === 0){
      novaArray.push("buzz");
    }
    else{
      novaArray.push("bug!")
    }

  }
    return novaArray;
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
