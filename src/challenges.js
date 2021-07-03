// Desafio 1
function compareTrue(a1,a2) {
  // seu código aqui
  if (a1 === true && a2 === true) {
  return true;
  } else {
  return false;
}}
  
// Desafio 2
function calcArea(base,height) {
  // seu código aqui
  let triangulo = (base * height) /2;
  return triangulo;
}

// Desafio 3
function splitSentence(frase) {
  // seu código aqui
return frase.split(" ");
}
//console.log(splitSentence('Go trybe'));

// Desafio 4
function concatName(listnames) {
  // seu código aqui
  let listaConcat = (listnames[0] +" , "+ listnames[listnames.length -1]);
  return listaConcat;
}
let listanomes = ['Lucas' , 'Cassiano' , 'Ferraz' , 'Paolillo']
//console.log(concatName(listanomes));

// Desafio 5
function footballPoints(wins , ties) {
  // seu código aqui 
  let vitorias = (wins * 3);
  return vitorias + ties;
}
//console.log(footballPoints(1 , 1));

// Desafio 6
function highestCount(listaNumeros) {
  // seu código aqui
  let maior = 0;

  for (let index = 0; index < listaNumeros.length; index += 1) {
    if(listaNumeros[index] > maior){
    maior = listaNumeros[index];
    }
  }  
let count = 0;
  for (let index = 0; index < listaNumeros.length; index = index + 1){
    if(listaNumeros[index] === maior){
    count +=1;
    }
  }
  console.log("o maior número é:", maior);
  console.log("quantas vezes aparece" , count);
}
  highestCount([4 , 8 , 9 , 9 , 9 , 0]);

// Desafio 7
function catAndMouse(mouse, cat1 , cat2) {
  // seu código aqui
  let calcDistance1 = (mouse - cat1);
  let calcDistance2 = (mouse - cat2);

  if(calcDistance1 > calcDistance2) {
    //console.log("o gato mais próximo é: cat 1")
     return("cat1 está mais próximo")
    }

  if(calcDistance1 < calcDistance2) {
    //console.log("o gato mais próximo é: cat 2")
    return("cat2 está mais próximo")
    }
 
 if (mouse === cat1 && mouse === cat2) {
    //console.log("os gatos trombam e o rato foge")
    return("os gatos trombam e o rato foge");
    }
  }
  catAndMouse(10 , 8 , 3);

// Desafio 8
function fizzBuzz(listaFiz) {
  // seu código aqui
  for
}

// Desafio 9
function encode(codigo) {
  // seu código aqui
  
}
function decode(descodigo) {
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