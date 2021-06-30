// Desafio 1
function compareTrue(primeiroValor, segundoValor) {
  // seu código aqui
  if (primeiroValor && segundoValor){
    return true;

  }else{
    return false;
  }
}

// Desafio 2
function calcArea(base,height) {
  // seu código aqui
  let area = (base * height) / 2
  return area
}

// Desafio 3
function splitSentence(String) {
  // seu código aqui
  let novaString = String.split(" ")
  return novaString;
}

// Desafio 4
function concatName(array) {
  // seu código aqui

  let primeiroItem = array[0];
  let ultimoItem = array[array.length -1];
  let fullString = `${ultimoItem}, ${primeiroItem}`;
    return fullString;
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let vitorias = wins * 3;
  let empates = ties;
  let total = vitorias + empates;
  return total;
}

// Desafio 6
function highestCount(numbers) {
  // seu código aqui
  numbers.sort((e, f) => f - e);
  if (numbers.length > 0) {
    let biggest = 0;
    let counts = 0;
    for (let i = 0; i < numbers.length; i += 1) {
      if (numbers[i] >= biggest) {
        biggest = numbers[i];
        counts+= 1;
      }
    }
    return counts;
  }
  return 'Favor verifique os dados inseridos'
}


// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  let distanciaCatUm = Math.abs(mouse - cat1);
  let distanciaCatDois = Math.abs(mouse - cat2);
  if (distanciaCatUm < distanciaCatDois) {
    return 'cat1';
  } else if (distanciaCatUm > distanciaCatDois) {
    return 'cat2';
  } else {
    return 'os gatos trombam e o rato foge';
  }
}

// Desafio 8
function fizzBuzz(array) {
  // seu código aqui
  let resultado = [];
  for (i in array) {
    if (((array[i] % 3) == 0) && ((array[i] % 5) == 0)) {
      resultado.push("fizzBuzz");
    } else if ((array[i] % 3) == 0) {
      resultado.push("fizz");
    } else if ((array[i] % 5) == 0) {
      resultado.push("buzz");
    } else {
      resultado.push("bug!");
    }
  }
  return resultado;
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
