// Desafio 1
function compareTrue(a, b) 
{
  return a?(b?true:false):false;
}

// Desafio 2
function calcArea(base, altura) 
{
  return (base * altura)/2;
}

// Desafio 3
function splitSentence(string) 
{
  return string.split(" ");
}

// Desafio 4
function concatName(array) 
{
  return array[array.length -1] + ", " + array[0];
}

// Desafio 5
function footballPoints(wins, ties) 
{
  return wins*3 + ties;
}

// Desafio 6
function highestCount(array) 
{
  let number = 1;
  let i = 0;
  array = array.sort();
  (Math.sign(array[array.length - 1]) == 1)?array.reverse():null;

  while(array[i] == array[i+1])
  {
    number++;
    i++;
  }
  return number;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) 
{
  let st = Math.abs(mouse - cat1);
  let nd = Math.abs(mouse - cat2);

  return (st!=nd)?((st>nd)?"cat2":"cat1"):"os gatos trombam e o rato foge";
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
