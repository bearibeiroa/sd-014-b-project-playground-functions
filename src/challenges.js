// Desafio 1
function compareTrue(valueA , valueB) {
  let resultado;
  if(valueA === true && valueB === true) {
    resultado = true;
  } else {
    resultado = false;
  }
  return resultado;
}

// Desafio 2
function calcArea(base , height) {
  return ((base * height) / 2);
}

// Desafio 3
function splitSentence(frases) {
  return (frases.split(" "));
}

// Desafio 4
function concatName(nomes) { 
  return nomes[nomes.length -1] + ', ' + nomes[0];
}

// Desafio 5
function footballPoints(wins , ties) {
  return ((wins * 3) + (ties * 1));
}

// Desafio 6
// Pesquisado externamente a função Math.max.apply(null, nomeDoArray), função para encontrar o maior valor dentro do array. Link:https://pt.stackoverflow.com/questions/35202/como-saber-o-maior-valor-de-um-array
function highestCount(numbers) {
  let higherNumber = Math.max.apply(null, numbers); // função pesquisada no site stackoverflow, como saber o maior valor de um array. Link: https://pt.stackoverflow.com/questions/35202/como-saber-o-maior-valor-de-um-array
  let countHigherNumber = 0;

  for (let index = 0; index < numbers.length; index +=1){
    if (numbers[index] === higherNumber) {
      countHigherNumber += 1;
    }
  }
  return countHigherNumber;
}

// Desafio 7
// Pesquisado externamente a função Math.abs, foi utilizada para não considerar o sinal negativo nos valores. Link: https://www.devmedia.com.br/matematica-em-javascript-o-objeto-math/27439
function catAndMouse(mouse, cat1, cat2) {
  if(Math.abs(mouse - cat1) > Math.abs(mouse - cat2)) {
    return "cat2";
  } else if (Math.abs(mouse - cat1) < Math.abs(mouse - cat2)) {
    return "cat1";
  } else {
    return 'os gatos trombam e o rato foge'
  }
}

// Desafio 8
function fizzBuzz(numbers) {
  let resultArray = [];
  for (let index = 0; index < numbers.length; index += 1 ) {
    if (numbers[index] % 5 === 0 && numbers[index] % 3 === 0){
    resultArray.push("fizzBuzz");
  } 
    else if (numbers[index] % 3 === 0) {
    resultArray.push("fizz");
  } 
    else if (numbers[index] % 5 === 0) {
    resultArray.push("buzz");
  } 
    else {
    resultArray.push("bug!");
  }
    
  }
  return resultArray;
}


// Desafio 9
// Para realizar a substiruição na string foi utilizado o comando >> variavel.replace('valor', 'substituicao'), foi pesquisado externamente. Link: https://www.alura.com.br/artigos/javascript-replace-manipulando-strings-e-regex?gclid=CjwKCAjwz_WGBhA1EiwAUAxIca0fY8zQHM6xYQgI-hKes8EKeh6B07ZqQgsCJHMBklMFy1TMihK4ixoC8SUQAvD_BwE
function encode(phrase) {
  let changeVowels = phrase;

  for (let letter in phrase) {
    if (phrase[letter] === "a") {
      changeVowels = changeVowels.replace("a", 1);
    } else if (phrase[letter] === "e") {
      changeVowels = changeVowels.replace("e", 2);
    } else if (phrase[letter] === "i") {
      changeVowels = changeVowels.replace("i", 3);
    } else if (phrase[letter] === "o") {
      changeVowels = changeVowels.replace("o", 4);
    } else if (phrase[letter] === "u") {
      changeVowels = changeVowels.replace("u", 5);
    }
  }
  return changeVowels;
}

function decode(phrase) {
  let changeNumber = phrase;

  for (let letter in phrase) {
    if (phrase[letter] === "1") {
      changeNumber = changeNumber.replace("1", "a");
    } else if (phrase[letter] === "2") {
      changeNumber = changeNumber.replace("2", "e");
    } else if (phrase[letter] === "3") {
      changeNumber = changeNumber.replace("3", "i");
    } else if (phrase[letter] === "4") {
      changeNumber = changeNumber.replace("4", "o");
    } else if (phrase[letter] === "5") {
      changeNumber = changeNumber.replace("5", "u");
    }
  }
  return changeNumber;
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
