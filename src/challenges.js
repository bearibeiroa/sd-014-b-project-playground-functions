// Desafio 1
function compareTrue(param1, param2) {
  return (param1 === true && param2 === true);
}

// Desafio 2
function calcArea(base, height) {
  return ((base * height) / 2);
}

// Desafio 3
function splitSentence(str) {
  return (str.split(' '));
}

// Desafio 4
function concatName(Array) {
  return (Array[Array.length -1] + "," + " " + Array[0]);
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins*3 + ties);
}

// Desafio 6
function highestCount(Array, maior, count) {
   maior = Math.max(...Array);
   count = 0;
   for (var i = 0; i < Array.length; i++) {
     if (Array[i] === maior) {
       count++;
     }
   }
  return count;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
 if( cat1 > cat2 && cat1 > mouse && (cat1 - mouse) > (mouse - cat2)) {
  console.log("o cat2 (" + cat2 + ") esta mais perto")
 }
 if((cat1 - mouse) ==  (mouse - cat2) && cat1 > cat2) {
  console.log("os gatos trombam e o rato foge")
 }
 if (cat2 > cat1 && cat2 > mouse && (cat2 - mouse) > (mouse - cat1)){
  console.log("o cat1 (" + cat1 + ") esta mais perto") 
 }
 if((cat2 - mouse) ==  (mouse - cat1) && cat2 > cat1) {
  console.log("os gatos trombam e o rato foge")
}
}

// Desafio 8
function fizzBuzz(Array, result) {
  result = [];
  for (var i = 0; i < Array.length; i++){
    if(Array[i] % 3 === 0 && Array[i] % 5 != 0){
      result.push('fizz')
    }
    if(Array[i] % 5 === 0 && Array[i] % 3 != 0){
      result.push('buzz')
    }
    if(Array[i] % 5 === 0 && Array[i] % 3 === 0){
      result.push('fizzBuzz')
    }
    if(Array[i] % 5 != 0 && Array[i] % 3 != 0){
      result.push('bug!')
    }
  }
   return result;
}

// Desafio 9
function encode(string) {
 var replaceChars={ "a":"1" , "e":"2" , "i":"3" , "o":"4" , "u":"5"};
const m = function(mat) {
  console.log("Essa letra ("+ mat +") será substuída por (" + 
  replaceChars[mat] + ") que representa o valor (Value) da letra" +   
  " (Key) dentro do objeto replaceChars ") 
return replaceChars[mat];
/** const m retorna os values das keys no obj replaceChar  */
}
 string = string.replace(/a|e|i|o|u/g, m)
 /** replace(substuido, substituinte)  */
 return string;
}
//--------Consulta: https://stackoverflow.com/questions/16576983 
function decode(string) {
  replaceNumber = { "1":"a" , "2":"e" , "3":"i" , "4":"o" , "5":"u"};
  string = string.replace(/1|2|3|4|5/g,function(match) {return replaceNumber[match];})
  return string; 
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
