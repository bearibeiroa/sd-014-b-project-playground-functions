// Desafio 1
function compareTrue(v1, v2) {
  if (v1 === true && v2 === true){
    return true;
  }
  return false
}

// Desafio 2
function calcArea(base, heigth) {
  return (base * heigth) / 2;
}


// Desafio 3
function splitSentence(frase) {
  return frase.split(" ")
}


// Desafio 4
function concatName(array) {
  //let names = array[array.length -1 , 0];
  return array[array.length - 1] + ", " + array[0];
}


// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + (ties * 1);
}


// Desafio 6
function highestCount(maiorrepetido) {
  let maiorNumber = 0;
  for (index in maiorrepetido){
    if (maiorrepetido[index] > maiorNumber){
      maiorNumber = maiorrepetido[index];
    }
  }
  let numberOfHits = 0;
  for (index in maiorrepetido) {
    if (maiorrepetido[index] === maiorNumber) {
      numberOfHits += 1;
    }
  }
  return numberOfHits;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distCat1;
  let distCat2;
  if(cat1 > mouse){
    distCat1 = cat1 - mouse;
  } else {
    distCat1 = mouse - cat1;
  }
  if(cat2 > mouse){
    distCat2 = cat2 - mouse;
  } else {
    distCat2 = mouse - cat2;
  }
  
  if (distCat1 < distCat2){
    return 'cat1';
  } else if (distCat2 < distCat1){
    return 'cat2'
  } else {
    return 'Os gatos trombam e o rato foge';
  }
}


// Desafio 8
function fizzBuzz(valor) {
  let numeros = [];
  for(index in valor){
    if((valor[index] % 3) === 0 && (valor[index] % 5) === 0){
      numeros.push("fizzBuzz");
    } else if ((valor[index] % 3) === 0) {
      numeros.push("fizz");
    } else if ((valor[index] % 5) === 0){
      numeros.push("buzz");
    } else {
      numeros.push("bug!");
    }
  };
  return numeros;
}


// Desafio 9
function encode(frase) {
  let fraseAlterada = [ ];
  for (index in frase) {
    if (frase[index] === 'a') {
      fraseAlterada.push('1');
    } else if (frase[index] === 'e') {
      fraseAlterada.push('2');
    } else if (frase[index] === 'i') {
      fraseAlterada.push('3');
    } else if (frase[index] === 'o') {
      fraseAlterada.push('4');
    } else if (frase[index] === 'u') {
      fraseAlterada.push('5');
    } else {
      fraseAlterada.push(frase[index]);
    }
  }
  let fraseAlteradaS = fraseAlterada.join(''); 
  return fraseAlteradaS;
}

function decode(frase) {
  let fraseAlterada = [ ];
  for (index in frase) {
    if (frase[index] === '1') {
      fraseAlterada.push('a');
    } else if (frase[index] === '2') {
      fraseAlterada.push('e');
    } else if (frase[index] === '3') {
      fraseAlterada.push('i');
    } else if (frase[index] === '4') {
      fraseAlterada.push('o');
    } else if (frase[index] === '5') {
      fraseAlterada.push('u');
    } else {
      fraseAlterada.push(frase[index]);
    }
  }
  let fraseAlteradaS = fraseAlterada.join(''); 
  return fraseAlteradaS;
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
