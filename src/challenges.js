// Desafio 1
function compareTrue(value1, value2) {
  return (value1 && value2);
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(Value) {
  return Value.split(" ");
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
    if (parameter[index] === max) {
    cont = cont + 1; 
      }
    }
    return (cont);
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
function fizzBuzz(number) {
  let numbersFizzBuzz = [];
  for (let index = 0; index < number.length; index += 1) {
    if (number[index] % 3 === 0 && number[index] % 5 === 0) {
      numbersFizzBuzz.push('fizzBuzz');
    } else if (number[index] % 5 === 0) {
      numbersFizzBuzz.push('buzz');
    } else if (number[index] % 3 === 0) {
      numbersFizzBuzz.push('fizz');
    } else {
      numbersFizzBuzz.push('bug!');
    }
  }
  return numbersFizzBuzz;
}

// Desafio 9
function encode(stringrray) {
  let result = stringrray.replace(/a/g, "1");
  result = result.replace(/e/g, '2');
  result = result.replace(/i/g, '3');
  result = result.replace(/o/g, '4');
  result = result.replace(/u/g, '5');
  return result;
}
function decode(raystring) {
  let result2 = raystring.replace(/1/g, 'a');
  result2 = result2.replace(/2/g, 'e');
  result2 = result2.replace(/3/g, 'i');
  result2 = result2.replace(/4/g, 'o');
  result2 = result2.replace(/5/g, 'u');
  return result2;
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
