// Desafio 1
function compareTrue(a, b) {
  return(a && b)
}

// Desafio 2
function calcArea(base, height) {
  let result = (base * height) / 2;
  return result;
}

// Desafio 3
function splitSentence(stringVariavel) {
  let resultado = stringVariavel.split(' ');
  return resultado;
}

// Desafio 4
function concatName(palavra) {      
  let primeiro = palavra[0];
  let ultimo = palavra[palavra.length - 1];  
  return ultimo +', ' + primeiro
}



// Desafio 5
function footballPoints(wins, ties) {
  let vitoria = wins * 3;
  let result = vitoria + ties;
  return result;
}

// Desafio 6
function highestCount(palavra) {
  let maior = palavra[0];
  for (let index = 0; index < palavra.length; index += 1) {    
    if (palavra[index] > maior) {
      maior= palavra[index];
    }     
    console.log(maior)       
    let contador = 0;
    for (let index = 0; index < palavra.length; index += 1) {
      if (palavra[index] === maior) {
        contador += 1;
      }
    }
    return contador;
  }
}
console.log(highestCount([-2, -2, -1]))
// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let DistanciaCat1 = Math.abs(mouse - cat1);
  let DistanciaCat2 = Math.abs(mouse - cat2);
  if (DistanciaCat1 > DistanciaCat2) {
    return 'cat2';
  } else if (DistanciaCat1 < DistanciaCat2) {
    return 'cat1';
  } else {
    return 'os gatos trombam e o rato foge';
  }
}

// Desafio 8
function fizzBuzz(vetor) {
  let vetorDecodificado = vetor;
  let fizz = 'fizz';
  let fizBuz = 'fizzBuzz';
  let buzz = 'Buzz';
  let bug = 'bug!';
  for (let index = 0; index < vetorDecodificado.length; index += 1) {
    if (
      vetorDecodificado[index] % 3 === 0 &&
      vetorDecodificado[index] % 5 === 0
    ) {
      vetorDecodificado[index] = fizBuz;
    } else if (vetorDecodificado[index] % 3 === 0) {
      vetorDecodificado[index] = fizz;
    } else if (vetorDecodificado[index] % 5 === 0) {
      vetorDecodificado[index] = buzz;
    } else {
      vetorDecodificado[index] = bug;
    }
  }
  return vetorDecodificado;
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
