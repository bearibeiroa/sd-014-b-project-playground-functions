// Desafio 1
function compareTrue(valor1, valor2) {
  return (valor1 && valor2);
}

// Desafio 2
function calcArea(base, height) {
  return ((base * height) / 2);
}

// Desafio 3
function splitSentence(string) {
  return (string.split(" "));
}

// Desafio 4
function concatName(array) {
  var concat = array[array.length - 1];
  concat += ', ';
  concat += array[0];
  return concat;
}

// Desafio 5
function footballPoints(wins, ties) {
  return (3 * wins + ties);
}

// Desafio 6
function highestCount(numbers) {
  var maior, cont = 0;
  maior = Math.max(...numbers);

  for (const key in numbers) {
    if (maior == numbers[key]){
      cont++;
    }
  }

  return cont;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if (Math.abs((cat1 - mouse)) < Math.abs((cat2 - mouse))) {
    return 'cat1';
  } else if (Math.abs((cat2 - mouse)) < Math.abs((cat1 - mouse))) {
    return 'cat2';
  } else {
    return 'os gatos trombam e o rato foge';
  }
}

// Desafio 8
function fizzBuzz(numbers) {
  var array = [];
  for (const key in numbers) {
    if ((numbers[key] % 5 === 0) && (numbers[key] % 3 === 0)) {
      array.push('fizzBuzz');
    } else if (numbers[key] % 3 === 0) {
      array.push('fizz');
    } else if (numbers[key] % 5 === 0) {
      array.push('buzz');
    } else {
      array.push('bug!');
    }
  }
  return array;
}

// Desafio 9
function encode(string) {
  var splited = string.split('');

  for (let key in splited) {
    switch (splited[key]) {
      case 'a':
        splited[key] = '1';
        break;
      case 'e':
        splited[key] = '2';
        break;
      case 'i':
        splited[key] = '3';
        break;
      case 'o':
        splited[key] = '4';
        break;
      case 'u':
        splited[key] = "5";
        break;
    
      default:
        break;
    }
  }
  return splited.join('');
}
function decode(string) {
  var splited = string.split('');

  for (let key in splited) {
    switch (splited[key]) {
      case '1':
        splited[key] = 'a';
        break;
      case '2':
        splited[key] = 'e';
        break;
      case '3':
        splited[key] = 'i';
        break;
      case '4':
        splited[key] = 'o';
        break;
      case '5':
        splited[key] = "u";
        break;
    
      default:
        break;
    }
  }

  return splited.join('');;
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
