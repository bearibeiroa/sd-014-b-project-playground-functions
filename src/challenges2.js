// Desafio 10
function techList(arr, name) {
  let arrays = [...arr];
  arrays.sort();
  let techs = [];
  if (arrays.length <= 0) {
    return "Vazio!";
  } else {
    for (let i = 0; i < arrays.length; i += 1) {
      techs.push(
        {
          tech: arrays[i],
          name: name
        });
    }
    return techs;
  }
}

// Desafio 11
function generatePhoneNumber(phone) {
  let number = [...phone];
  let num = ["(", number[0], number[1],")", " ", number[2], number[3], number[4], number[5], number[6], "-", number[7], number[8], number[9], number[10]];
  if (phoneNumber.length !== 11) {
    result = 'Array com tamanho incorreto.';
  } else {
    for (let i = 0; i < phoneNumber.length; i += 1) {
      if (phoneNumber[i] < 0 || phoneNumber[i] > 9 ) {
        return 'não é possível gerar um número de telefone com esses valores' ;
      }
    }
    for (let i = 0; i < phoneNumber.length; i += 1) {
      let repNum = 0;
      for (let index = 0; index < phoneNumber.length; index += 1) {
        if (phoneNumber[i] === phoneNumber[index]) {
          repNum += 1;
        }
      }
      if (repNum > 2) {
        return"não é possível gerar um número de telefone com esses valores"
      }
    }
  }
  return num.join('',',');
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let diffAB = Math.abs(lineA - lineB);
  let diffBC = Math.abs(lineB - lineC);
  let diffAC = Math.abs(lineC - lineA);
  let sumAB = lineA + lineB;
  let sumBC = lineB + lineC;
  let sumAC = lineC + lineA;
  let resultA = lineA > diffBC && lineA < sumBC;
  let resultB = lineB > diffAC && lineB < sumAC;
  let resultC = lineC > diffAB && lineC < sumAB;

  if (lineA > sumBC || lineB > sumAC || lineC > sumAB)
    return false;
  else if (lineA < diffBC || lineB < diffAC || lineC < diffAB)
    return false;
  else if (resultA === true || resultB === true || resultC === true)
    return true;
}

// Desafio 13
function hydrate(str) {
  let n = /\d+/g;
  let num = str.match(n);
  let water = 0;

  for (let i = 0; i < num.length; i += 1) {
      water += parseInt(num[i]);
  }

  if (water === 1)
    return water + " copo de água";
  else
    return water + " copos de água";

}
hydrate("1 cerveja e 3 afff")

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
