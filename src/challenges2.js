// Desafio 10
function createObjects(tech, name) {
  this.tech = tech;
  this.name = name;
}
function techList(technologies, personalName) {
  let technologieList = [];
  let myList = [];
  for (technologie of technologies.sort()) {
    technologieList.push(technologie);
  }
  for (let index = 0; index < technologieList.length; index += 1) {
    myList[index] = new createObjects(technologieList[index], personalName);
  }
  if (technologieList.length === 0) {
    return 'Vazio!';
  }
  return myList;
}

console.log(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas'));

// Desafio 11
function generatePhoneNumber(numbers) {
  let numbersIdx = numbers;
  let newNumbers = findDuplicates(numbersIdx);

  for (let index = 0; index < 10; index += 1) {
    if (newNumbers[index] > 1) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }
  if (numbers.length != 11) {
    return 'Array com tamanho incorreto.';
  }
  for (let number of numbers) {
    if (number < 0 || number > 9) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }

  return `(${numbers[0]}${numbers[1]}) ${numbers[2]}${numbers[3]}${numbers[4]}${numbers[5]}${numbers[6]}-${numbers[7]}${numbers[8]}${numbers[9]}${numbers[10]}`;
}

console.log(generatePhoneNumber([8, 2, 8, 0, 5, 3, 7, 3, 9, 6, 5]));

function findDuplicates(arr) {
  let sorted_arr = arr.slice().sort();
  let results = [];
  let newNumbers = { 0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0 };
  for (let i = 0; i < sorted_arr.length - 1; i++) {
    if (sorted_arr[i + 1] === sorted_arr[i]) {
      results.push(sorted_arr[i]);
    }
  }
  let index = 0;
  while (index < 10) {
    for (let result of results) {
      if (result === results[index]) {
        newNumbers[result] += 1;
      }
    }
    index += 1;
  }

  return newNumbers;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let checkA = [lineB + lineC, Math.abs(lineB - lineC)];
  let checkB = [lineA + lineC, Math.abs(lineA - lineC)];
  let checkC = [lineB + lineA, Math.abs(lineB - lineA)];
  let boolC = false;
  let boolB = false;
  let boolA = false;
  if (checkC[0] > lineC && checkC[1] < lineC) {
    boolC = true;
  } else {
    return false;
  }
  if (checkB[0] > lineB && checkB[1] < lineB) {
    boolB = true;
  } else {
    return false;
  }
  if (checkA[0] > lineA && checkA[1] < lineA) {
    boolA = true;
  } else {
    return false;
  }
  if (boolA === true && boolC === true && boolB === true) {
    return true;
  }
}

console.log(triangleCheck(2, 14, 8));

// Desafio 13
function hydrate(string) {
  let matches = string.match(/(\d+)/g);
  let matchesNum = [];
  for (let index = 0; index < matches.length; index += 1) {
    matchesNum[index] = +matches[index];
  }
  let sum = 0;
  for (let index = 0; index < matches.length; index += 1) {
    sum += matchesNum[index];
  }
  if (sum === 1) {
    return `${sum} copo de água`;
  }
  return `${sum} copos de água`;
}

console.log(hydrate('1 cachaça, 5 cervejas e 1 copo de vinho'));

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
