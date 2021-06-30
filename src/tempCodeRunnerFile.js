function highestCount(array) {
  let highestNumber = 0;
  let countNumbers = 0;
  for(let index = 0; index < array.length; index += 1) {
    if(array[index] > highestNumber) {
      highestNumber = array[index];
      countNumbers = 1;
    }else if(highestNumber === array[index]) {
      countNumbers += 1;
    }
  }
  return countNumbers;
}
console.log(highestCount(1, 7, 9, 5));