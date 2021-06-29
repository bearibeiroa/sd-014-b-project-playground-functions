// Desafio 1
function compareTrue(value1, value2) {
  if (value1 === true && value2 === true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(string) {
  return string.split(' ');
}

// Desafio 4
function concatName(array) {
  let concatString = array[array.length - 1] + ', ' + array[0];

  return concatString;
}

// Desafio 5
function footballPoints(wins, ties) {
  let points = wins * 3 + ties;
  return points;
}

// Desafio 6
function highestCount(array) {
  let highestNumberIndex = 0;
  let count = 0;
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] > array[highestNumberIndex]) {
      highestNumberIndex = i;
    }
  }
  for (number of array) {
    if (number === array[highestNumberIndex]) {
      count++;
    }
  }
  return count
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let cat1Distance = cat1 - mouse;
  cat1Distance = Math.abs(cat1Distance)
  let cat2Distance = cat2 - mouse;
  cat2Distance = Math.abs(cat2Distance)

  if (cat1Distance > cat2Distance){
    return "cat2"
  } else if (cat1Distance < cat2Distance) {
    return "cat1"
  } else if(cat1Distance === cat2Distance){
    return "os gatos trombam e o rato foge"
  }
}

// Desafio 8
function fizzBuzz(array) {
  let newArray = [];
  for(i=0;i<array.length;i+=1){
    if(array[i] % 3 === 0 && array[i] % 5 === 0){
      newArray.push('fizzBuzz')
    }else if(array[i] % 3 === 0){
      newArray.push('fizz')
    } else if(array[i] % 5 === 0){
      newArray.push('buzz')
    } else {
      newArray.push('bug!')
    }
  }

  return newArray
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
