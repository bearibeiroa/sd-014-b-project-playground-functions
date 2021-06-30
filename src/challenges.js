// Desafio 1
function compareTrue(value1, value2) {
  if (value1 === true && value2 ===true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, altura) {
  return (base * altura / 2);
  }

// Desafio 3
function splitSentence(string) {
  return string.split(' ');
}

// Desafio 4
function concatName(array) {
  let ultimoItem = array[array.length-1];
  let primeiroItem = array[0];
  let contatenada = [ultimoItem, primeiroItem];
    return contatenada.join(', ');
  
}

// Desafio 5
function footballPoints(wins, ties) {
  let points = (wins * 3) + ties;
  return points;
}

// Desafio 6
function highestCount(valores) {
  // Função para o highestNumber copiada da documentação
let highestNumber = valores.reduce(function(a, b) {
  return Math.max(a, b);
});
let count = 0

for (let index6 = 0; index6 < valores.length; index6 += 1) {
  let current = valores[index6];
  if (current == highestNumber) {
    count += 1;
  } else {
  }
}
 return count;
}
  

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distCat1 = mouse - cat1;
  if (distCat1 <= 0) {
    distCat1 = distCat1 * -1
    } else {
    }
    
  let distCat2 = mouse - cat2;
  if (distCat2 <= 0) {
    distCat2 = distCat2 * -1
    } else {
    }
  console.log(distCat1);
  console.log(distCat2);

  if (distCat1 < distCat2) {
    return "cat1";
  } else if (distCat2 < distCat1) {
    return "cat2";
  } else {
    return "os gatos trombam e o rato foge";
  }
  
}

// Desafio 8
function fizzBuzz(fizzOuBuzz) {

  for (let index8 = 0; index8 < fizzOuBuzz.length; index8 += 1) {
    if (fizzOuBuzz[index8] % 3 === 0 && fizzOuBuzz[index8] % 5 === 0) {
      fizzOuBuzz[index8] = 'fizzBuzz';
    } else if (fizzOuBuzz[index8] % 3 === 0 && fizzOuBuzz[index8] % 5 != 0) {
      fizzOuBuzz[index8] = 'fizz';
    } else if (fizzOuBuzz[index8] % 3 != 0 && fizzOuBuzz[index8] % 5 === 0) {
      fizzOuBuzz[index8] = 'buzz';
    } else {
      fizzOuBuzz[index8] = 'bug!';
    }
  }
  return fizzOuBuzz;
}

// Desafio 9
function encode(codifique) {
let codArr = '';

  for (let indexCod = 0; indexCod < codifique.length; indexCod += 1) {
    if (codifique[indexCod] != 'a' && codifique[indexCod] != 'e' && codifique[indexCod] != 'i' && codifique[indexCod] != 'o' && codifique[indexCod] != 'u') {
      codArr.push(codifique[indexCod]);
    } else if (codifique[indexCod] == 'a') {
      codArr.push('1');
    } else if (codifique[indexCod] == 'e') {
      codArr.push('2');
  } else if (codifique[indexCod] == 'i') {
    codArr.push('3');
  } else if (codifique[indexCod] == 'o') {
    codArr.push('4');
  } else { 
    codArr.push('5');
  }
 }
 return codArr;
}

function decode(decodifique) {
  let decodArr;

  for (let indexdecod = 0; indexdecod < decodifique.length; indexdecod += 1) {
    if (decodifique[indexdecod] == "a") {
      decodArr[indexdecod] = "1";
    } else if (decodifique[indexdecod] == "e") {
      decodArr[indexdecod] = "2";
  } else if (decodifique[indexdecod] === "i") {
    decodArr[indexdecod] = "3";
  } else if (decodifique[indexdecod] === "o") {
    decodArr[indexdecod] = "4";
  } else if (decodifique[indexdecod] === "u") {
    decodArr[indexdecod] = "5";
  } else {
  }
}
let mensagemDecodificada = codArr.toString();
return mensagemDecodificada;
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