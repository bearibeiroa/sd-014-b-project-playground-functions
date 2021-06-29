// Desafio 4

let arrayy = ['Lucas', 'Cassiano', 'Ferraz', 'Paolillo'];
// return: Paolillo, Lucas

function concatName(array) {
  let string = '';
  string = (array[0] + ', ' + array[array.length - 1]);
  return string;
}

console.log(concatName(arrayy));
