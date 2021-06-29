// Desafio 1
const compareTrue = (x, y) => x === true && y === true;

// Desafio 2
const calcArea = (base, height) => (base * height) / 2;

// Desafio 3
const splitSentence = (str) => str.split(' ');

// Desafio 4
const concatName = (arr) => `${arr[arr.length - 1]}, ${arr[0]}`;

// Desafio 5
const footballPoints = (win, tie) => win * 3 + tie;

// Desafio 6
const highestCount = (arr) => {
  let i = 0;
  let max = Math.max(...arr);
  arr.forEach((n) => {
    if (max === n) {
      i += 1;
    }
  });
  return i;
};

// Desafio 7
const catAndMouse = (mouse, cat1, cat2) => {
  let dist1 = Math.abs(cat1 - mouse);
  let dist2 = Math.abs(cat2 - mouse);

  if (dist1 > dist2) return 'cat2';
  if (dist2 > dist1) return 'cat1';

  return 'os gatos trombam e o rato foge';
};

// Desafio 8
const fizzBuzz = (arrs) => {
  const r = arrs.map((n) => {
    if (n % 3 === 0 && n % 5 === 0) return 'fizzBuzz';
    if (n % 3 === 0) return 'fizz';
    if (n % 5 === 0) return 'buzz';
    return 'bug!';
  });

  return r;
};

// Desafio 9
function encode(stringE) {
  let stringE2 = [];

  for (let ind = 0; ind < stringE.length; ind += 1) {
    if (stringE[ind] === 'a') {
      stringE2.push('1');
    } else if (stringE[ind] === 'e') {
      stringE2.push('2');
    } else if (stringE[ind] === 'i') {
      stringE2.push('3');
    } else if (stringE[ind] === 'o') {
      stringE2.push('4');
    } else if (stringE[ind] === 'u') {
      stringE2.push('5');
    } else {
      stringE2.push(stringE[ind]);
    }
  }
  return stringE2.join('');
}

function decode(stringD) {
  let stringD2 = [];
  for (let ind2 = 0; ind2 < stringD.length; ind2 += 1) {
    if (stringD[ind2] === '1') {
      stringD2.push('a');
    } else if (stringD[ind2] === '2') {
      stringD2.push('e');
    } else if (stringD[ind2] === '3') {
      stringD2.push('i');
    } else if (stringD[ind2] === '4') {
      stringD2.push('o');
    } else if (stringD[ind2] === '5') {
      stringD2.push('u');
    } else {
      stringD2.push(stringD2[ind2]);
    }
  }

  return stringD2.join('');
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
