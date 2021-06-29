// Desafio 1
function compareTrue(value1, value2) {
  if (value1 === true && value2 ===true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, altura) {
  return (base * altura / 2);
  }

// Desafio 3
function splitSentence(string) {
  return string.split(' ');
}

// Desafio 4
function concatName(array) {
  let ultimoItem = array[array.length-1];
  let primeiroItem = array[0];
  let contatenada = [ultimoItem, primeiroItem];
    return contatenada.join(', ');
  
}

// Desafio 5
function footballPoints(wins, ties) {
  let points = (wins * 3) + ties;
  return points;
}

// Desafio 6
function highestCount(valores) {
  let ordemCrescente = valores.sort;
  let indiceContador = ordemCrescente.length;
  let maiorNumero = ordemCrescente[indiceContador];
  let count6 = 0;

  for (let index6 = indiceContador; numeroAtual == maiorNumero; index6 -= 1) {
    let numeroAtual = ordemCrescente[index6];
    count6 +=1;
    return count6;
  }
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distCat1 = mouse - cat1;
  if (distCat1 <= 0) {
    distCat1 = distCat1 * -1
    } else {
    }
    
  let distCat2 = mouse - cat2;
  if (distCat2 <= 0) {
    distCat2 = distCat2 * -1
    } else {
    }
  console.log(distCat1);
  console.log(distCat2);

  if (distCat1 < distCat2) {
    return "cat1";
  } else if (distCat2 < distCat1) {
    return "cat2";
  } else {
    return "os gatos trombam e o rato foge";
  }
  
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
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
