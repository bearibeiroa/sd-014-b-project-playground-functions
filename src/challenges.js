// Desafio 1
function compareTrue(value1, value2) {
  return (value1 && value2);
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2 ;
}

// Desafio 3
function splitSentence(Value) {
     return Value.split(" ")
}


// Desafio 4
function concatName(arrayIn) {
arrayIn.splice(0,0, arrayIn[arrayIn.length-1]);
arrayIn.splice(2,arrayIn.length-2);
return arrayIn.join(', ');
}

// Desafio 5
function footballPoints(wins, ties) {
 return ((3 * wins) + ties);
}

// Desafio 6
function highestCount(parameter) {
  let cont = 0; 
  let max = Math.max.apply(null,parameter);
    for (let index = 0; index < parameter.length; index += 1){
      if (parameter[index] === max){
       cont = cont + 1; 
      }
    }
    return(cont)
}
  
// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  cont1 = 0;
  cont2 = 0;

   while (mouse != cat1){
   if (mouse > cat1 ){
   cat1 = cat1 + 1  
   cont1 = cont1 +1
   } else {
     cat1 = cat1 - 1
     cont1 = cont1 + 1
   }
  }

    while (mouse != cat2){
      if (mouse > cat2 ){
        cat2 = cat2 + 1  
       cont2 = cont2 +1
        } else {
          cat2 = cat2 - 1
         cont2 = cont2 + 1
         }  
   }
   let string = 0;
   if (cont1 === cont2){
       string = 'os gatos trombam e o rato foge';
   } else if (cont1 > cont2){
       string = 'cat2'
   } else {
     string = 'cat1'
   }
     return string; 
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
