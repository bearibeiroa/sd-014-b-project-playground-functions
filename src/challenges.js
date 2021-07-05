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
// console.log(splitSentence('Go trybe'));

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
// console.log(footballPoints(1,1));;

// Desafio 6
function highestCount(listNums) {
  // seu código aqui
  let maior = listNums[0];
  for (let index = 0; index < listNums.length; index += 1) {
    if (listNums[index] >= maior) {
      maior = listNums[index];
    } 
  }
let count = 0;
  for (let index2 = 0; index2 < listNums.length; index2 += 1) {
    if (listNums[index2] === maior) {
      count += 1;
    }
  }
  return count;
}
 
// Desafio 7
function catAndMouse(mouse,cat1,cat2) {
  // seu código aqui
      let calcDistance1 = 0
      let calcDistance2 = 0
if (mouse > cat1 && mouse > cat2) {
  for (let indexCat1 = cat1; indexCat1 < mouse; indexCat1 += 1) {
    calcDistance1 += 1;
  }
  for (let indexCat2 = cat2; indexCat2 < mouse; indexCat2 +=1) {
    calcDistance2 += 1;
  }
} if (cat1 < mouse && cat2 > mouse) {
  for  (let indexCat1 = cat1; indexCat1 < mouse; indexCat1 += 1) {
    calcDistance1 += 1;
  }
  for (let indexCat2 = mouse; indexCat2 < cat2; indexCat2 += 1) {
    calcDistance2 += 1;
  } 
  else if (mouse < cat1 && mouse < cat2) {
    for (let indexCat1 = mouse; indexCat1 < cat1; indexCat1 += 1) {
      calcDistance1 += 1;
    }
    for (let indexCat2 = mouse; indexCat2 < cat2; indexCat2 += 1) {
      calcDistance2 += 1;
    }
  if (calcDistance1 > calcDistance2) {
  // console.log ("o gato mais próximo é: cat 1")
     return 'cat1';
  } else if (calcDistance1 < calcDistance2) {
  // console.log("o gato mais próximo é: cat 2")
     return 'cat2';
  } else {
  // console.log("os gatos trombam e o rato foge")
     return 'os gatos trombam e o rato foge';
  }
 catAndMouse (9,5,3);

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode(stringCode) {
  // seu código aqui
let mensagem = ''
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

