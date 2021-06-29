// Desafio 6
let arrayy = [-2, -2, -1]; // return 2 (9 2x)

//let arrayy = [0, 4, 14, 14, 9, 2, 14]; // return: 1 (9 1x)

function highestCount(array) {
  let maiorNumero = array[0];
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] > maiorNumero) {
      maiorNumero = array[index];
    }
  }

  let count = 0;
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] === maiorNumero) {
      count += 1;
    }
  }
  return count;
}
  
console.log(highestCount(arrayy));
