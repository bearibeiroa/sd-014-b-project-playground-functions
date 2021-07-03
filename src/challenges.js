// Desafio 1
function compareTrue(a1, a2) {
  // seu código aqui
  if (a1 === true && a2 === true) {
      return true;
  } else {
        return false;
    }
}
  
// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  let triangulo = (base * height) / 2;
  return triangulo;
}

// Desafio 3
function splitSentence(frase) {
  // seu código aqui
    return frase.split(' ');
}
console.log(splitSentence('Go trybe'));

// Desafio 4
function concatName(listnames) {
  // seu código aqui
  let listaConcat = (listnames[listnames.length - 1] + ', ' + listnames[0]);
  return listaConcat;
}
let listnames = (['foguete', 'não', 'tem', 'ré']);;
//console.log(concatName(listnames));

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui 
  let vitorias = (wins * 3);
  return vitorias + ties;
}
  console.log(footballPoints(1,1));;

// Desafio 6
function highestCount(listaNumeros) {
  // seu código aqui
  let maior = 0;
  for (let index = 0; index < listaNumeros.length; index += 1) {
    if(listaNumeros[index] > maior) {
    maior = listaNumeros[index];
    }
  }  
let count = 0;
  for (let index = 0; index < listaNumeros.length; index += 1) {
    if (listaNumeros[index] === maior) {
      count += 1;
    }
  }
    // console.log('o maior número é:', maior);
    // console.log('quantas vezes aparece', count);
}
highestCount([4,9,9,9,9,0]);

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
      let calcDistance1 = (mouse - cat1);
      let calcDistance2 = (mouse - cat2);
  if (calcDistance1 > calcDistance2) {
  // console.log("o gato mais próximo é: cat 1")
     return ('cat1 está mais próximo');
    }
  if (calcDistance1 < calcDistance2) {
  // console.log("o gato mais próximo é: cat 2")
    return('cat2 está mais próximo');
    }
  if (mouse === cat1 && mouse === cat2) {
  // console.log("os gatos trombam e o rato foge")
    return ('os gatos trombam e o rato foge');
    }
  }
  catAndMouse(10, 8, 9);

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode(codigo) {
  // seu código aqui
let mensagem = ' ';
for (let index = 0; index <= codigo.length; index += 1) {
  if (codigo[index] === 'a') {
    mensagem = '1';
    }
    if (codigo[index] === 'e') {
      mensagem = '2';
    }
    if (codigo[index] === 'i') {
      mensagem = '3';
    }
    if (codigo[index] === 'o') {
      mensagem = '4';
    }
    if (codigo[index] === 'u') {
      mensagem = '5';
    }
  }
  return codigo;
}
console.log(encode('hi there!'));

function decode(descodigo) {
  // seu código aqui

  for (let index = 0; index <= descodigo.length; index += 1) {
          if (descodigo[index] === '1') {
      descodigo = 'a';
    }
          if (descodigo[index] === '2') {
        descodigo = 'e';
      }
          if (descodigo[index] === '3') {
        descodigo = 'i';
      }
          if (descodigo[index] === '4') {
        descodigo = 'o';
      }
          if (descodigo[index] === '5') {
        descodigo = 'u';
  }
return descodigo;
    }
       }
console.log(decode('h3 th2r2!'));

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
