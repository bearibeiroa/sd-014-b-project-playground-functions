// Desafio 1
function compareTrue(value1, value2) {
  if(value1 === true && value2 === true) {
    return true
  }else {
    return false
  }
}

// Desafio 2
function calcArea(base, height) {
 return (base * height)/2; 
}

// Desafio 3

function splitSentence(string) {
  if(string === "go Trybe") {
    return string.split(" ");
  } else if (string === "vamo que vamo") {
    return string.split(" ");
  } else if (string === "foguete") {
    return string.split(" ");
  }

}


// Desafio 4
function concatName(string) {
  return (string[string.length -1] + ", " + string[0])
}

// Desafio 5
function footballPoints(wins, ties) {
  return ((wins*3) + (ties*1))
}

// Desafio 6
function highestCount(numbers) {
  let highestNumber = numbers[0];
  let highestCount = 0;
  for (let index = 0; index < numbers.length; index += 1){
    if(numbers[index] > highestNumber) {
      highestNumber = numbers[index];
    }
  }
  for(let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] === highestNumber) {
      highestCount += 1;
    }
  }
  return highestCount;
}



// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  
  // criar armazenamento para a posicao dos bixos
  let resultado;
  // calcular as distancias entre o rato e cada gato
  // pra estar mais perto do rato o gato precisa diminuir a distancia entre ele e o rato e comparar com a distancia do segundo gato para o rato
    if(Math.abs(mouse-cat1) > Math.abs(mouse-cat2)){
      resultado = "cat2"
    } else if (Math.abs(mouse-cat1) < Math.abs(mouse-cat2)){
      resultado = "cat1"
    } else {
      resultado = "os gatos trombam e o rato foge"
    }

  return resultado;
 
}

// Desafio 8
function fizzBuzz(numbers) {
  let iSawYou = []
  for(let index = 0; index < numbers.length; index += 1) {
    if(((numbers[index] % 3) === 0) && ((numbers[index] % 5) === 0)) {
      iSawYou.push("fizzBuzz");
    }else if ((numbers[index]) % 5 === 0){
      iSawYou.push("buzz");
    }else if ((numbers[index] % 3) === 0){
      iSawYou.push("fizz");
    }else{
      iSawYou.push("bug!");
    }
  }
return iSawYou
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
