function fizzBuzz(array) {
  let newArray = [];
  for (let num of array) {
    if (num % 15 === 0) {
      newArray.push('fizzbuz');
    } else if (num % 5 === 0) {
      newArray.push('fizz');
    } else if (num % 3 === 0) {
      newArray.push('buzz');
    } else {
      newArray.push('bug!');
    }
  }
  return newArray;
}
console.log(fizzBuzz([9, 25]));