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
  //Referencia https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/max reduce e max usado em conjuntos para me dizer qual é o nunmero maior.
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
function catAndMouse(mouse,cat1,cat2) {
  // seu código aqui
  //Math abs para retornar sempre numeros positivos
  //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/abs
  if (Math.abs(cat1 - mouse) === Math.abs(cat2 - mouse) ) {
    return "os gatos trombam e o rato foge";
  }
  if ((cat1 - mouse) > (cat2 - mouse)) {
    return "cat2";
  }
   if ((cat1 - mouse) < (cat2 - mouse)) {
    return "cat1";
  }
}
function complementaFizzBuzz(numeral) {
  if (numeral % 3 === 0) {
    return 'fizz';
  }
  if (numeral % 5 === 0) {
    return 'buzz';
  }
  return 'bug!';
}
// Desafio 8
function fizzBuzz(numeros) {
  // seu código aqui
  let array = [];
  for (i=0; i < numeros.length ; i++) {
   if (numeros[i] % 3 === 0 && numeros[i] % 5 === 0) {
     array.push('fizzBuzz')
   } else {
     array.push(complementaFizzBuzz(numeros[i]))
   }
  }
  return array;
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
