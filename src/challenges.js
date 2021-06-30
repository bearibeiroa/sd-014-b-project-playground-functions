// Desafio 1
function compareTrue(value1, value2) {
  if (value1 === true && value2 === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  return ((base * height) / 2);
}

// Desafio 3
function splitSentence(phrase) {
  return phrase.split(' ');
}

// Desafio 4
function concatName(names) {
  let arrayOfNames = names.concat();
  return (`${arrayOfNames[arrayOfNames.length - 1]}, ${arrayOfNames[0]}`);
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3 + ties);
}

// Desafio 6
function highestCount(sequence) {
  let max = Math.max.apply(null, sequence);
  let counter = 0;
  for (let index = 0; index < sequence.length; index += 1) {
    if (sequence[index] === max) {
      counter += 1;
    }
  }
  return counter;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let dist1 = cat1 - mouse;
  dist1 = Math.abs(dist1);
  let dist2 = cat2 - mouse;
  dist2 = Math.abs(dist2);
  if (dist1 === dist2) {
    return 'os gatos trombam e o rato foge';
  }
  if (dist1 < dist2) {
    return 'cat1';
  }
  if (dist2 < dist1) {
    return 'cat2';
  }
}

function n5n3(values) {
  for (let key in values) {
    if (values[key] % 5 !== 0 && values[key] % 3 !== 0) {
      values[key] = 'bug!';
    }
  }
}

function s3n5(values) {
  for (let key in values) {
    if (values[key] % 3 === 0 && values[key] % 5 !== 0) {
      values[key] = 'fizz';
    }
  }
}

function s5n3(values) {
  for (let key in values) {
    if (values[key] % 5 === 0 && values[key] % 3 !== 0) {
      values[key] = 'buzz';
    }
  }
}

function s5s3(values) {
  for (let key in values) {
    if (values[key] % 3 === 0 && values[key] % 5 === 0) {
      values[key] = 'fizzBuzz';
    }
  }
}// Desafio 8
function fizzBuzz(values) {
  n5n3(values);
  s3n5(values);
  s5n3(values);
  s5s3(values);
  return values;
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
