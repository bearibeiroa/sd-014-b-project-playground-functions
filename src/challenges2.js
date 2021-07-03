// Desafio 10
function techList(techArray, name) {
  techArray.sort();
  let arrayInfo = [];
  if (techArray.length === 0) {
    arrayInfo = 'Vazio!';
  } else {
    let info = {
    };
    for (let index of techArray) {
      info = {
        tech: index,
        name: name,
      };
      arrayInfo.push(info);
    }
  }
  return arrayInfo;
}

// Desafio 11
function generatePhoneNumber(theArray) {
  let count = 0;
  let repetition = 0;
  if (theArray.length !== 11) {
    return "Array com tamanho incorreto."
  } else {
    theArray.unshift('(');
    theArray.splice(3,0,')');
    theArray.splice(4,0,' ');
    theArray.splice(10,0,'-');
  }
  for (let index = 0; index < theArray.length; index += 1) {
    if (theArray[index] < 0) {
      count += 1
    }
    else if (theArray[index] > 9) {
      count += 1
    }
    else {
    let arrayIndex = theArray[index]
    for (let newIndex = 0; newIndex < theArray.length; newIndex += 1) {
      let arrayNumber = theArray[newIndex]
      if (arrayIndex === arrayNumber) {
        repetition += 1
      }
    }
    }
  }
  if (count > 0) {
    return "não é possível gerar um número de telefone com esses valores"
  } else if (repetition > 21) {
    return "não é possível gerar um número de telefone com esses valores"
  }
  else {
    return theArray.join('')
  }
}

// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
