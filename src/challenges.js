//Arrow Function: https://codeburst.io/javascript-understand-arrow-function-syntax-ab4081bba85b

//Funções no geral encontradas em w3schools.com

// Desafio 1
//https://stackoverflow.com/questions/9232907/can-i-omit-the-else-in-an-inline-javascript-if-statement
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
//ref https://developer.mozilla.org/ "Mapeando um array de números usando uma função callback que contém um argumento"
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
const encode = (str) => {
  let eStr = str.split('');
  let pushStr = [];
  for (let j = 0; j < eStr.length; j += 1) {
    if (eStr[j] === 'a') {
      pushStr.push(eStr[j].replace('a', 1));
    } else if (eStr[j] === 'e') {
      pushStr.push(eStr[j].replace('e', 2));
    } else if (eStr[j] === 'i') {
      pushStr.push(eStr[j].replace('i', 3));
    } else if (eStr[j] === 'o') {
      pushStr.push(eStr[j].replace('o', 4));
    } else if (eStr[j] === 'u') {
      pushStr.push(eStr[j].replace('u', 5));
    } else {
      pushStr.push(eStr[j]);
    }
  }
  return pushStr.join('');
};

const decode = (str) => {
  let dStr = str.split('');
  let pushStr = [];
  for (let j = 0; j < dStr.length; j += 1) {
    if (dStr[j] === '1') {
      pushStr.push(dStr[j].replace('1', 'a'));
    } else if (dStr[j] === '2') {
      pushStr.push(dStr[j].replace('2', 'e'));
    } else if (dStr[j] === '3') {
      pushStr.push(dStr[j].replace('3', 'i'));
    } else if (dStr[j] === '4') {
      pushStr.push(dStr[j].replace('4', 'o'));
    } else if (dStr[j] === '5') {
      pushStr.push(dStr[j].replace('5', 'u'));
    } else {
      pushStr.push(dStr[j]);
    }
  }
  return pushStr.join('');
};

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
