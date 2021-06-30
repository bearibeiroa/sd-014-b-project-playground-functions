// Desafio 10
function techList(techs, names) {
  let techLists = [];
  techs.sort();
  if (techs.length > 0) {
    for (let index in techs) {
      techList.push({
        tech: techs[index],
        name: names,
      });
    }
  } else {
    return 'Vazio!';
  }
  return techLists;
}
function repeteMais3(numeros) {
  let resultado = true;
  for (let index = 0; index < numeros.length; index += 1) {
    let contador = 0;
    for (let index2 = 0; index2 < numeros.length; index2 += 1) {
      if (numeros[index2] === numeros[index]) {
        contador += 1;
      }
    }
    //parte feita com ajuda do @Esdras Oliveira-turma 14-B pelo slack
    if (contador > 2) {
      return resultado;
    }
    contador = 0;
  }
  return false;
}
console.log(repeteMais3([1, 2, 3, 5, 8, 8, 8, 1]));
// Desafio 11
function generatePhoneNumber(number) {
  let numberTel = '';
  if (number.length !== 11) {
    return 'Array com tamanho incorreto.';
  } else {
    let erro = repeteMais3(number);
    for (let index of number) {
      if (index < 0 || index > 9 || erro === true) {
        return 'não é possível gerar um número de telefone com esses valores';
      } else {
        numberTel += index;
      }
    }
    const numeroFormatado = numberTel.replace(
      /(\d{2})?(\d{5})?(\d{4})/,
      '($1) $2-$3'
    );
    return numeroFormatado;
  }
}
console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]));

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if (lineA < lineB + lineC && lineA > Math.abs(lineB - lineC)) {
    return true;
  } else if (lineB < lineA + lineC && lineB > Math.abs(lineA - lineC)) {
    return true;
  } else if (lineC < lineA + lineC && lineC > Math.abs(lineA - lineB)) {
    return true;
  }
  return false;
}

// Desafio 13
//pesquisa sobre replace feita no site: https://www.devmedia.com.br/javascript-replace-substituindo-valores-em-uma-string/39176
function hydrate(drink) {
  let glassOfWater = drink.replace(/[^0-9]/g, []);
  let inteiro = [];
  for (let i = 0; i < glassOfWater.length; i += 1) {
    let numero = parseInt(glassOfWater[i], 10);
    inteiro[i] = numero;
  }
  let soma = 0;
  for (let index = 0; index < inteiro.length; index += 1) {
    soma = soma + inteiro[index];
  }
  if (soma > 1) {
    return soma + ' copos de água';
  }
  return soma + ' copo de água';
}
console.log(hydrate('0 cachaça, 0 cervejas e 0 copo de vinho'));
module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
