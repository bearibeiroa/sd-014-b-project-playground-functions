// Desafio 1
function compareTrue(value1, value2) {
  if (value1 === true && value2 === true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, altura) {
  return ((base * altura) / 2);
}

// Desafio 3
function splitSentence(string) {
  return string.split(' ');
}

// Desafio 4
function concatName(array) {
  let ultimoItem = array[array.length - 1];
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

  // Função para o highestNumber encontrada na documentação, em https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/max e https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce onde
  // math.max seleciona o maior valor entre 2 elementos do array e
  // reduce executa esta função para todos os elementos do array.

  let highestNumber = valores.reduce(function (a, b) {
    return Math.max(a, b);
  });
  let count = 0;

  for (let index6 = 0; index6 < valores.length; index6 += 1) {
    let current = valores[index6];
    if (current === highestNumber) {
      count += 1;
    }
  }
  return count;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distCat1 = mouse - cat1;
  if (distCat1 <= 0) {
    distCat1 *= -1;
  }

  let distCat2 = mouse - cat2;
  if (distCat2 <= 0) {
    distCat2 *= -1;
  }

  if (distCat1 < distCat2) {
    return 'cat1';
  } else if (distCat2 < distCat1) {
    return 'cat2';
  } else {
    return 'os gatos trombam e o rato foge';
  }  
}

// Desafio 8
function fizzBuzz(fizzOuBuzz) {

for (let index8 = 0; index8 < fizzOuBuzz.length; index8 += 1) {
  if (fizzOuBuzz[index8] % 3 === 0 && fizzOuBuzz[index8] % 5 === 0) {
    fizzOuBuzz[index8] = 'fizzBuzz';
  } else if (fizzOuBuzz[index8] % 3 === 0 && fizzOuBuzz[index8] % 5 !== 0) {
    fizzOuBuzz[index8] = 'fizz';
  } else if (fizzOuBuzz[index8] % 3 !== 0 && fizzOuBuzz[index8] % 5 === 0) {
    fizzOuBuzz[index8] = 'buzz';
  } else {
    fizzOuBuzz[index8] = 'bug!';
    }
    }
  return fizzOuBuzz;
  }
  
// Desafio 9
function encode(codifique) {

  // recurso Replace encontrado no site https://blog.betrybe.com/javascript/javascript-replace/
  // nomeDaString.replace('valor a ser substituído', 'novo valor')
  // inclusão de / antes e depois do valor a ser substituído para incluir a especificação global g, para substituir todos valores requeridos e a tag i, para ignorar o case sensitive.

  let mensagemCodA = codifique.replace(/a/gi, '1');
  let mensagemCodE = mensagemCodA.replace(/e/gi, '2');
  let mensagemCodI = mensagemCodE.replace(/i/gi, '3');
  let mensagemCodO = mensagemCodI.replace(/o/gi, '4');
  let mensagemCodU = mensagemCodO.replace(/u/gi, '5');
  
  return mensagemCodU;
}

function decode(decodifique) {

  let mensagemDecA = decodifique.replace(/1/gi, 'a');
  let mensagemDecE = mensagemDecA.replace(/2/gi, 'e');
  let mensagemDecI = mensagemDecE.replace(/3/gi, 'i');
  let mensagemDecO = mensagemDecI.replace(/4/gi, 'o');
  let mensagemDecU = mensagemDecO.replace(/5/gi, 'u');

  return mensagemDecU;
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
