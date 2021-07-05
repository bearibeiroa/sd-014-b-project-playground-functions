// Desafio 1
function compareTrue(valor1, valor2) {
  if (valor1 === true && valor2 === true) {
    return true;
  } 
  else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) /2;
  return area;
}

// Desafio 3
function splitSentence(frase) {
  return frase.split (' ');
}

// Desafio 4
function concatName(palavra) {
  let soma = palavra[palavra.length -1] + ', ' + palavra[0];
  return soma;
}

// Desafio 5
function footballPoints(wins , ties) {
  let points = (wins * 3) + ties;
  return points;
}

// Desafio 6
function highestCount(numero) {
  let maior = numero[0];
  for (let index = 0; index < numero.length; index += 1) {
    if (numero[index] >= maior) {
      maior = numero[index];
    }
  }
  let x = 0;
  for (let i = 0; i < numero.length; i += 1) {
    if (numero[i] === maior) {
      x += 1;
    }
  }
  return x;
}

// Desafio 7
function catAndMouse (mouse, cat1, cat2) {
  let cat1Mouse = cat1 - mouse;
  let cat2Mouse = cat2 - mouse;
  if (Math.abs (cat1Mouse)===Math.abs(cat2Mouse)) {
    return 'os gatos trombam e o rato foge';
  } 
  else if (Math.abs (cat1Mouse) > Math.abs(cat2Mouse)) {
    return 'cat2';
  } 
  else (Math.abs (cat1Mouse) < Math.abs (cat2Mouse))
    return 'cat1'; 
}

// Desafio 8
function fizzBuzz(array) {
  let array2 = [];
  for (i = 0; i < array.length; i += 1) {
    if ((array[i] % 3) === 0 && (array[i] % 5) === 0) {
      array2 +='fizzBuzz,';
    } else if ((array[i] % 5) === 0) {
      array2 += 'buzz,';
    } else if (((array[i] % 3) === 0)) {
      array2 += 'fizz,';
    } else {
      array2 += 'bug!,';
    }
  }
  return array2.split(',', array.length);
}

// Desafio 9
function encode(string) {
  let letters = [];
  for (let letter of string){
    letters.push (letter);
  }
  for (let i = 0; i < letters.length; i += 1){
    if (letters[i]==='a'{
      letters[i] = 1;
    })
    else if (letters[i]==='e'){
      letters[i]= 2;
    }
    else if (letters[i]==='i'){
      letters[i]= 3;
    }
    else if (letters[i]==='o'){
      letters[i]= 4;
    }
    else if (letters[i]==='u'){
      letters[i]= 5;
    }

  }
  return letters.join('');
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
