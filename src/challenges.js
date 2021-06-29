// Desafio 1
function compareTrue(param1,param2) {
  if (param1 === true && param2 === true){
    return true;
  } else {
    return false;
  }
}


// Desafio 2
function calcArea(base,height) {
  area = (base*height)/2;
  return area;
}


// Desafio 3
function splitSentence(str) {
  let armazenaStr = "";
  let espaco = " ";
  for (index=0;index<str.length;index+=1){
    if (str[index] != espaco){
      
    }
  }

}



// Desafio 4
function concatName(array) {
  let name1 = array[array.length-1];
  let name2 = array[0];
  let namesummed = name1 + ', '+ name2;
  return namesummed;
}
console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));


// Desafio 
function footballPoints(wins,ties) {
  let winspoints = wins*3;
  let tiespoints = ties;
  let totalpoints = winspoints+tiespoints;
  return totalpoints;
}


// Desafio 6
function highestCount() {
  
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

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
