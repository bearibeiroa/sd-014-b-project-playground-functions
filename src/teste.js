/* Desafio 8
divisível apenas por 3, apresente uma string "fizz";
divisível apenas por 5, apresente uma string "buzz";
divisível por 3 e 5, retorne a string "fizzBuzz";
não dividido por 3 nem por 5, retorne a string "bug!"
*/
let arrayy = [2, 15, 7, 9, 45];

function fizzBuzz(array) {
  for (let index in array) {
    if (array[index] % 3 === 0 && array[index] % 5 === 0) {
      array[index] = 'fizzBuzz';
    }
    else if (array[index] % 3 === 0) {
      array[index] = 'fizz';
    }
    else if (array[index] % 5 === 0) {
      array[index] = 'buzz';
    } else { array[index] = 'bug!'; }
  }
  return array;
}

console.log(fizzBuzz(arrayy));
