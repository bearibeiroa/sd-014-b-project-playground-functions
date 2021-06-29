function concatName(array) {
  let names = '';
  names = array[array.length - 1] + ', ' + array[0];
  return names;
}
console.log(concatName(['vitor', 'mateus', 'fernanda', 'isabel']))