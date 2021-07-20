// Desafio 1
function compareTrue(value1, value2) {
  if (value1 === true && value2 === true) {
  return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, heigth) {
  return (base * heigth) / 2
}

// Desafio 3
function splitSentence(nomesArrays) {
  let valueStrings = nomesArrays.split(' ');
  return valueStrings;
}

// Desafio 4
function concatName(nomesArrays) {
  const primeiroIten = nomesArrays[0];
  const ultimoIten = nomesArrays[nomesArrays.length - 1];
  
  
  return '${ultimoIten}, ${primeiroIten}';
}

// Desafio 5
function footballPoints(wins, ties) {
  let points = 0;

  for (let index = 0; index < wins; index ++) {
    points += 3;
  }

  for (let index = 0; index < ties; index ++) {
    points += 1;
  }

  return points;
}

// Desafio 6
function highestCount(numbers) {
  numbers = numbers.sort((a, b) => a - b);
  function isHighest(value) {
    return value === numbers[numbers.length - 1];
  }
  return numbers.filter(isHighest).length;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  const positionCat1 = Math.abs(mouse - cat1);
  const positionCat2 = Math.abs(mouse - cat2);

  if (positionCat1 < positionCat2) {
    return 'cat1';
  }

  if (positionCat1 > positionCat2) {
    return 'cat2';
  }

  if (positionCat1 === positionCat2) {
    return 'os gatos trombam e o rato foge';
  }
}

// Desafio 8
function verificaFizBuzz(numero) {
  let string = null;

  if (numero % 3 === 0 && numero % 5 === 0) {
    string = 'fizzBuzz';
  } else if (numero % 3 === 0) {
    string = 'fizz';
  } else if (numero % 5 === 0) {
    string = 'buzz';
  }

  return string;
}

function fizzBuzz(arrayNum) {
  const arrayResult = [];

  for (let i = 0; i < arrayNum.length; i += 1) {
    let string;

    string = verificaFizBuzz(arrayNum[i]);

    if (string === null) {
      string = 'bug!';
    }

    arrayResult.push(string);
  }

  return arrayResult;
}

// Desafio 9
function encode(str) {
  let subList = {
    a: '1',
    e: '2',
    i: '3',
    o: '4',
    u: '5',
  };
  let listEncoded = str.replace(/a|e|i|o|u/gi, (item) => {
    let it = subList[item];
    let listItem = it.replace(/(?:^|\s)\S/g, function (elemento) {
      return elemento;
    });
    return listItem;
  });
  return listEncoded;
}

function decode(str2) {
  let subList = {
    1: 'a',
    2: 'e',
    3: 'i',
    4: 'o',
    5: 'u',
  };
  let listEncoded = str2.replace(/1|2|3|4|5/gi, (item) => {
    let itt = subList[item];
    let listItem = itt.replace(/(?:^|\s)\S/g, function (elemento) {
      return elemento;
    });
    return listItem;
  });
  return listEncoded;
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
