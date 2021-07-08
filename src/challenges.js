// Desafio 1
function compareTrue(valor1, valor2) {
  // seu código aqui

  if (valor1 === true && valor2 === true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui

  let areatri = 0;
  areatri = (base * height) / 2;
  return areatri;
}


// Desafio 3
function splitSentence(exer3) {
  // seu código aqui

  let frase = exer3;
  let resultado = frase.split(" ");
  return resultado;
}


// Desafio 4
function concatName(exer4) {
  // seu código aqui

  let arrayList = exer4;
  return (arrayList[arrayList.length -1] + ", " + arrayList[0]);
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let pontosCorridos = 0;
  pontosCorridos = (wins*3 + ties*1);
  return pontosCorridos;
}

// Desafio 6
function highestCount(exer6) {
  // seu código aqui
  let contador = 0;
  let highValue = exer6[0];
  for(let index = 1; index < exer6.length; index += 1) {
    if (exer6[index] > highValue) {
      highValue = exer6[index];
    }
  }
    for(let index2 = 0; index2 < exer6.length; index2 +=1) {
      if (highValue === exer6[index2])
        contador += 1;
  }
  return contador;
}

// esse foi osso dms

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  dist1 = 0;
  dist2 = 0;
  dist1 = mouse - cat1; 
  dist1 = dist1 * Math.sign(dist1)
  dist2 = mouse - cat2;
  dist2 = dist2 * Math.sign(dist2)
  if (dist1 === dist2) {
    return "os gatos trombam e o rato foge";
  } else if (dist2 > dist1) {
    return "cat1";
  } else {
    return "cat2";
  }
}

/* a distância dos gatos em relação ao rato estão nas formulas dist1 e dist2
como algum dos gatos pode estar na frente do rato, e o outro atrás, eu multipliquei os
resultados das distancias pelo seu próprio sinal, p ficar um valor positivo
então se a dist1 for menor, quer dizer que o gato 2 está mais perto, 
se a dist2 for maior, representa que o gato 1 está mais perto,
se a distancia for a mesma representa que eles irão se trombar no caminho. */

// Desafio 8
function fizzBuzz(exer8) {
  // seu código aqui
  let resultado = [];
  for (index = 0; index < exer8.length; index +=1) {
    if (exer8[index] % 3 === 0 && exer8[index] % 5 === 0) {
    resultado.push("fizzBuzz");
    } else if (exer8[index] % 3 === 0) {
    resultado.push("fizz");
    } else if (exer8[index] % 5 === 0) {
    resultado.push("buzz");
    } else {
    resultado.push("bug!");
    } 
  }
  return resultado;
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
