// Desafio 1
function compareTrue(valorA, valorB) {
  return valorA && valorB;
  // seu código aqui
}

// Desafio 2
function calcArea(base, heigth) {
  return ((base * heigth) / 2);
  // seu código aqui
}

// Desafio 3
function splitSentence(str) {
  return str.split(" ");
  // seu código aqui
}

// Desafio 4
function concatName(str) {
  return (str[str.length -1] + ', ' + str[0]);
  // seu código aqui
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3 + ties * 1);
  // seu código aqui
}

// Desafio 6
function highestCount(int) {
  let num = 0; let cont = 0;
  for (let index = 0; index < int.length; index += 1) {
    if (int[index] > num) {
      num = int[index];
    }
  }
  for (let index = 0; index < int.length; index += 1) {
    if (int[index] === num) {
      cont += 1;
    }
  }
  return cont;
  // seu código aqui
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distUm = (mouse - cat1); let distDois = (mouse - cat2);
  if (distUm < 0) {
    distUm = distUm * (-1);
  }
  if (distDois < 0) {
    distDois = distDois * (-1);
  }
  if (distUm < distDois) {
    return 'cat1';
  }
  if (distDois < distUm) {
    return 'cat2';
  }
  return 'os gatos trombam e o rato foge';

  // seu código aqui
}

// Desafio 8
function fizzBuzz(str) {
  let answer = [];
  for (let index = 0; index < str.length; index++) {
    if (str[index] % 3 === 0) {
      if (str[index] % 5 === 0) {
        answer.push('fizzBuzz');
      }
      else {
        answer.push('fizz');
      }
    }
    else if (str[index] % 5 === 0) {
      answer.push('buzz');
    }
    else {
      answer.push('bug!');
    }
  } return answer;
  // seu código aqui
}

function encode(text = '') {
  let newText = '';
  for(let l of text) {
    if(l === "a") {
      newText += "1";
    } else if (l === "e") {
      newText += "2";
    } else if (l==="i") {
      newText += "3";
    } else if (l === "o") {
      newText += "4";
    } else if (l ==="u") {
      newText += "5";
    } else {
      newText += l;
    }
} 
return newText;
  // seu código aqui
}
function decode(text = '') {
  let newText = '';
  for(let l of text) {
    if(l === "1") {
    newText += "a";
  } else if (l === "2") {
    newText += "e";
  } else if (l==="3") {
    newText += "i";
  } else if (l === "4") {
    newText += "o";
  } else if (l ==="5") {
    newText += "u";
  } else {
    newText += l;
  }
  } 
  return newText;
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
