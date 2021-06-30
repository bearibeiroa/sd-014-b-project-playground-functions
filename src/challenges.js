// Desafio 1
function compareTrue(valor1,valor2) {
  // seu código aqui
  if (valor1 && valor2) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base,altura) {
  // seu código aqui
  let areaTriangulo = (base*altura)/2;
  return areaTriangulo;
}

// Desafio 3
function splitSentence(palavra) {
  // seu código aqui
  // Referencia usada https://www.w3schools.com/jsref/jsref_split.asp
  let textoDividido = palavra.split(" ");
  return textoDividido;
}

// Desafio 4
function concatName(names) {
  // seu código aqui
  let lastItem = names[names.length - 1];
  return lastItem+", "+names[0];
  }

// Desafio 5
function footballPoints(vitorias,empates) {
  // seu código aqui
  return vitorias*3 + empates*1;
}

// Desafio 6
function highestCount(numeros) {
  // seu código aqui
  let contador = 0;
  //Referencia https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/max
  const maior = numeros.reduce(function(a, b) {
    return Math.max(a,b);
  });
  for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] === maior) {
      contador++;
    }
  }
  console.log(maior);
  return contador;
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
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
