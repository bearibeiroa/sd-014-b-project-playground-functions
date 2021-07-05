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
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(string) {
  return string.split(' ');
}

// Desafio 4

function concatName(frase) {
  let a = frase[frase.length - 1]; 
  let b = frase[0];
  return (a + ', ' + b);
}

// Desafio 5

function footballPoints(wins, ties) {
  return ((wins * 3) + (ties));
}

// Desafio 6

function highestCount(num) {
  let maior = -1;
  let count = 0;
  for (let index = 0; index < num.length; index += 1) {
    if (num[index] > maior) {
      maior = num[index];
    }
  }
  for (let index = 0; index < num.length; index += 1) {
    if (maior === num[index]) {
      count += 1;
    }
  }
  return count;
}


// Desafio 7

function catAndMouse(mouse, cat1, cat2) {
  let dist1 = mouse - cat1;
  let dist2 = mouse - cat2;

  if (dist1 < 0) {
    dist1 = dist1 * -1;
  }

  if (dist2 < 0) {
    dist2 = dist2 * -1;
  }
  
  if (dist1 === dist2) {
    return 'os gatos trombam e o rato foge';
  } else if (dist1 > dist2) {
    return 'cat2';
  } else {
    return 'cat1';
  }
}

// Desafio 8

function fizzBuzz(numbers) {
  let result = [];
  for (let index = 0; index < numbers.length; index += 1) {
    if ((numbers[index] % 3) === 0 && (numbers[index] % 5) === 0) {
      result.push('fizzBuzz');
    } else if ((numbers[index] % 3) === 0) {
      result.push('fizz');
    } else if ((numbers[index] % 5) === 0) {
      result.push('buzz');
    } else {
      result.push('bug!');
    }
  }
return result;
}

// Desafio 9
let string = 'matheus';
let array = '';
function encode(string) {
  
  for (let index = 0; index < string.length; index += 1) {
    if (string[index] === 'a') {
      string[index] = '1';
      array = array + '1';
    } else if (string[index] !== 'a') {
      
    }
  }
  return array;
}
console.log(encode(string));

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
