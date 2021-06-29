// Desafio 1
function compareTrue(v1, v2) {
  if (v1 === true && v2 === true){
    return true;
  }
  return false
}

// Desafio 2
function calcArea(base, heigth) {
  return (base * heigth) / 2;
}


// Desafio 3
function splitSentence(frase) {
  return frase.split(" ")
}


// Desafio 4
function concatName(array) {
  //let names = array[array.length -1 , 0];
  return array[array.length - 1] + ", " + array[0];
}


// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + (ties * 1);
}


// Desafio 6
function highestCount(maiorrepetido) {
  let maiorNumber = 0;
  let numberOfHits = 0;
  for (index in maiorrepetido){
    if (maiorrepetido[index] > maiorNumber){
      maiorNumber = maiorrepetido[index];
    }
  }
  for (index2 in maiorrepetido) {
    if (maiorrepetido[index2] === maiorNumber) {
      numberOfHits += 1;
    }
  }
  return numberOfHits;
}


// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distCat1;
  let distCat2;
  if(cat1 > mouse){
    distCat1 = cat1 - mouse;
  } else {
    distCat1 = mouse - cat1;
  }
  if(cat2 > mouse){
    distCat2 = cat2 - mouse;
  } else {
    distCat2 = mouse - cat2;
  }
  
  if (distCat1 < distCat2){
    return 'cat1';
  } else if (distCat2 < distCat1){
    return 'cat2'
  } else {
    return 'Os gatos trombam e o rato foge';
  }
}
console.log(catAndMouse(10, 14, 6));

// Desafio 8
function fizzBuzz() {
  // seu código aqui
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
