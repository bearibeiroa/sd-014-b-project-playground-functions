// Desafio 1
function compareTrue(valor1, valor2) {
  if (valor1 && valor2 === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(string) {
  return string.split(' ');
}

// Desafio 4
function concatName(array) {
  let ultimo = array.length - 1;
  let primeiroUltimo = array[ultimo] + ', ' + array[0];
  return primeiroUltimo;
}

// Desafio 5
function footballPoints(wins, ties) {
  let winPoints = wins * 3;
  let tiePoints = ties * 1;
  return (tiePoints + winPoints);
}

// Desafio 6
function highestCount(array) {
  let maiorNumero = array[0];
  let contador = 0;
  for (let numero of array) {
    if (numero > maiorNumero) {
      maiorNumero = numero;
    }
  }
  for (let numero of array) {
    if (numero === maiorNumero) {
      contador += 1;
    }
  }
  return contador;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  cat1 = Math.abs(cat1);
  cat2 = Math.abs(cat2);
  if (cat1 === cat2) {
    return "os gatos trombam e o rato foge";
  } else if (cat1 < cat2){
    return "cat1";
  } else if (cat2 < cat1){
    return "cat2";
  }
}

// Desafio 8
function fizzBuzz(array) {
  for (let numero in array) {
    if (array[numero] % 3 == 0 && array[numero] % 5 == 0){
      array.splice(numero, 1, "fizzBuzz");
    } else if (array[numero] % 3 != 0 && array[numero] % 5 != 0) {
      array.splice(numero, 1, "bug!");
    } else if (array[numero] % 3 == 0) {
      array.splice(numero, 1, "fizz");
    } else{
      array.splice(numero, 1, "buzz");
    }
  }
  return array;
}

// Desafio 9
function encode(string) {
  let codigo = '';
  let split = string.split('');
  for(let index in split){
    if(split[index] === 'a'){
      split.splice(index,1,1)
    }
   else if(split[index] === 'e'){
      split.splice(index,1,2)
    }
    else if(split[index] === 'i'){
      split.splice(index,1,3)
    }
    else if(split[index] === 'o'){
      split.splice(index,1,4)
    }
    else if(split[index] === 'u'){
      split.splice(index,1,5)
    }
    codigo += (split[index]);
  }
  return codigo;
}
function decode(string) {
  let mensagem = '';
  let split = string.split('');
  for(let index in split){
    if(split[index] === '1'){
      split.splice(index,1,'a')
    }
   else if(split[index] === '2'){
      split.splice(index,1,'e')
    }
    else if(split[index] === '3'){
      split.splice(index,1,'i')
    }
    else if(split[index] === '4'){
      split.splice(index,1,'o')
    }
    else if(split[index] === '5'){
      split.splice(index,1,'u')
    }
    mensagem += (split[index]);
  }
  return mensagem;
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
