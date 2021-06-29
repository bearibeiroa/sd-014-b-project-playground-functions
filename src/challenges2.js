// Desafio 10
function techList(techsArray, name) {
  let sortedArray = techsArray.sort();
  let objectArray = [];

  if (sortedArray.length === 0) {
    return "Vazio!"
  }
  
  for (let index = 0; index < sortedArray.length; index++) {
    const element = sortedArray[index];
    let object = {
      tech: element,
      name: name
    }
    objectArray.push(object)
  }

  return objectArray;
}

// Desafio 11
function generatePhoneNumber(array) {
  if (array.length !== 11) {
    return "Array com tamanho incorreto.";
  }

  let saveRepeatedTimes = {};
  let resultString = '';

  for (let index = 0; index < array.length; index++) {
    const element = array[index];

    if (saveRepeatedTimes[`num${element}`] === undefined) {
      saveRepeatedTimes[`num${element}`] = 0;
    } 
    
    if (saveRepeatedTimes[`num${element}`] === 2 || element < 0 || element > 9) {
      return "não é possível gerar um número de telefone com esses valores";
    } else {
      saveRepeatedTimes[`num${element}`] += 1;
    }

    if (resultString.length === 0) {
      resultString += `(${element}`;
    } else if (resultString.length === 2) {
      resultString += `${element}) `;
    } else if (resultString.length === 9) {
      resultString += `${element}-`
    } else {
      resultString += element;
    }

  }

  return resultString;
}

console.log(generatePhoneNumber([1, 2, 4, 2, 5, 6, 8, 8, 9, 0, 1]))

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
