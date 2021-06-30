// Desafio 1
function compareTrue(par1,par2) {
  if (par1==true &&par2==true){
    return true;
  }else{
    return false;
  }
}

// Desafio 2
function calcArea(base,height) {
 area= (base*height)/2;
 return area;
}

// Desafio 3
function splitSentence(frase) {
  array=frase.split(" ");
  return array;
  
}

// Desafio 4
function concatName(lista) {
  tamList=lista.length
  array= lista.concat();
  final = array[tamList-1]+', '+lista[0];
  return final;
}

// Desafio 5
function footballPoints(wins,ties) {
  points=0;
  points=(wins*3)+(ties*1);
  return points;
}

// Desafio 6
function highestCount(numbers) {
  let highnumb=0;
  let contnumb=0;
  for (cont=0;cont<numbers.length;cont++){
    if (numbers[cont]>highnumb){
      highnumb=numbers[cont]
    }
  }
  for (cont=0;cont<numbers.length;cont++){
    if (numbers[cont]==highnumb){
      contnumb++;
    }
  }
  return contnumb;  
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
