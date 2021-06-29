// Desafio 1
function compareTrue(value1, value2) {
  return value1 === true && value2 === true;
}

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(phrase) {
  let split = [];
  for (let index = 0; index < phrase; index += 1) {
   split = phrase.push(phrase[index]);
  }
  return split;
}

// Desafio 4
function concatName(value) {
  let soma = value[value.length -1] + ', ' + value[0];
  return soma;
}

// Desafio 5
function footballPoints(wins, ties) {
  let points = (wins * 3) + ties;
  return points;
}

// Desafio 6
function highestCount(numbers) {
  let biggest = numbers[0];
  for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] >= biggest) {
      biggest = numbers[i];
    }
  }
  let r = 0;
  for (let i2 = 0; i2 < numbers.length; i2 += 1) {
    if (numbers[i2] === biggest) {
      r += 1;
    }
  }
  return r;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let cat1distance = 0;
  let cat2distance = 0;
   if (mouse > cat1 && mouse > cat2 ) {
       for (let cat1index = cat1; cat1index < mouse; cat1index += 1) {
           cat1distance += 1;
       }
       for (let cat2index = cat2; cat2index < mouse; cat2index += 1) {
           cat2distance += 1;
       }
   } else if (cat1 < mouse && cat2 > mouse ) {
       for (let cat1index =cat1; cat1index < mouse; cat1index += 1) {
           cat1distance += 1;
       }
       for (let cat2index = mouse; cat2index < cat2; cat2index += 1) {
           cat2distance += 1;
       }
   } else if (mouse < cat1 && mouse < cat2) {
       for (let cat1index = mouse; cat1index < cat1; cat1index += 1) {
           cat1distance += 1;
       }
       for (let cat2index = mouse; cat2index < cat2; cat2index += 1) {
           cat2distance += 1;
       }
   }
   if (cat1distance < cat2distance) {
       return "cat1";
    } else if (cat1distance > cat2distance) {
        return "cat2";
    } else {
      return "os gatos trombam e o rato foge";
    }
  }

// Desafio 8
function fizzBuzz(array) {
  let fizzBuzzResult = [];
    for (let i = 0; i < array.length; i += 1) {
        if (array[i] / 3 >= 1 && array[i] / 5 >= 1 && Number.isInteger(array[i] / 3) && Number.isInteger(array[i] / 5)) {
            fizzBuzzResult.push("fizzBuzz");
        } else if (array[i] / 3 >= 1 && Number.isInteger(array[i] / 3)){
            fizzBuzzResult.push("fizz");
        } else if (array[i] / 5 >= 1 && Number.isInteger(array[i] / 5)) {
            fizzBuzzResult.push("buzz");
        } else {
            fizzBuzzResult.push("bug!");
        }
    }
    return fizzBuzzResult;
}


// Desafio 9
function encode(value1) {
  let encoded = "";
  for (let i = 0; i < value1.length; i += 1) {
    switch (value1[i]) {
      case "a":
         encoded = encoded + "1";
         break;
      
      case "e":
          encoded = encoded + "2";
          break;

      case "i":
          encoded = encoded + "3";
          break;

      case "o":
          encoded = encoded + "4";
          break;

      case "u":
          encoded = encoded + "5";
          break;

      default :
          encoded = encoded + value1[i];
      } 
  }
  return encoded;
}
function decode(value2) {
  let decoded = "";
  for (let i = 0; i < value2.length; i += 1) {
    switch (value2[i]) {
      case "1":
         decoded = decoded + "a";
         break;
      
      case "2":
          decoded = decoded + "e";
          break;

      case "3":
          decoded = decoded + "i";
          break;

      case "4":
          decoded = decoded + "o";
          break;

      case "5":
          decoded = decoded + "u";
          break;

      default :
          decoded = decoded + value2[i];
      } 
  }
  return decoded;
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
