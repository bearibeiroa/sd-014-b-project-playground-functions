function highestCount(numbers) {
    let highestNumber = 0;
    let highestNumberCount = 0;
    for (let iMaior = 0; iMaior < numbers.length; iMaior += 1) {
        if (numbers[iMaior] > highestNumber) {
            highestNumber = numbers[iMaior];
        }    
    }
    for (let index = 0; index < numbers.length; index += 1) {
        if (numbers[index] === highestNumber) {
            highestNumberCount += 1;
        }
    }
    return highestNumberCount;
}