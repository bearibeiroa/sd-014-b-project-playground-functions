// Desafio 1
function compareTrue(value1, value2) {
  if (value1 === true && value2 === true) {
    return true
  } else {
    return false
  }
}

// Desafio 2
function calcArea(base, height) {
  let zone = base * height / 2
  return zone
}

// Desafio 3
function splitSentence(string) {
  array = string.split(" ")
  return array
}

// Desafio 4
function concatName(array) {
  let calcu = array.length - 1
  let phrase = (array[calcu] + ", " + array[0])
  return phrase
}

// Desafio 5
function footballPoints(wins, ties) {
  let winsPoints = wins * 3
  let tiesPoints = ties
  let totalPoints = winsPoints + tiesPoints
  return totalPoints
}

// Desafio 6
function highestCount(value) {

  let highNumber = 0;
  let sameNumber = 0;

  /* descobrir qual é o maior número */
  for (let index = 0; index < value.length; index += 1) {
    if (highNumber < Math.abs(value[index])) {
      highNumber = value[index]
    }
  }

  /* contar quantas vezes ele se repete */
  for (let index = 0; index < value.length; index += 1) {
    if (highNumber === value[index]) {
      sameNumber += 1;
    }
  }
  return sameNumber
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let calcuCatOne = cat1 - mouse;
  let calcuCatTwo = cat2 - mouse;
  if (Math.abs(calcuCatOne) === Math.abs(calcuCatTwo)) {
    return "os gatos trombam e o rato foge"
  } else if (cat1 - mouse < cat2 - mouse) {
    return 'cat1'
  } else if (cat2 - mouse < cat1 - mouse) {
    return 'cat2'
  }
}

// Desafio 8
function fizzBuzz(array) {
  let arrayReturn = []
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] % 3 === 0 && array[index] % 5 === 0) {
      arrayReturn.push('fizzBuzz')
    } else if (array[index] % 5 === 0) {
      arrayReturn.push('buzz')
    } else if (array[index] % 3 === 0) {
      arrayReturn.push('fizz')
    } else {
      arrayReturn.push('bug!')
    }
  }
  return arrayReturn
}

// Desafio 9
function encode(word) {
  for (let index = 0; index < word.length; index += 1) {
    if (word[index] === 'a') {
      word = word.replace(word[index], '1')
    } else if (word[index] === 'e') {
      word = word.replace(word[index], '2')
    } else if (word[index] === 'i') {
      word = word.replace(word[index], '3')
    } else if (word[index] === 'o') {
      word = word.replace(word[index], '4')
    } else if (word[index] === 'u') {
      word = word.replace(word[index], '5')
    }
  }
  return word
}

function decode(word) {
  for (let index = 0; index < word.length; index += 1) {
    if (word[index] === '1') {
      word = word.replace(word[index], 'a')
    } else if (word[index] === '2') {
      word = word.replace(word[index], 'e')
    } else if (word[index] === '3') {
      word = word.replace(word[index], 'i')
    } else if (word[index] === '4') {
      word = word.replace(word[index], 'o')
    } else if (word[index] === '5') {
      word = word.replace(word[index], 'u')
    }
  }
  return word
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
