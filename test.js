let string = 'A1B3';
let number = 0;
let umNove = [1, 2, 3, 4, 5, 6, 7, 8, 9]; // Coded by Victor Martins
for (let key of string) {
  for (let index = 0; index <= umNove.length; index += 1) {
    if (umNove[index] == key) {
      number += umNove[index];
    }
  }
}
console.log(number);
