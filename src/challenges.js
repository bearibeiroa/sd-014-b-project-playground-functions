// Desafio 1
function compareTrue(value1, value2) {
    if (value1 === true && value2 === true) {
        return true;
    } else {
        return false;
    }
}


// Desafio 2
function calcArea(base, height) {
    let area = (base * height) / 2;
    return area;
}


// Desafio 3
function splitSentence(valueSentence) {
    let resultSentence = valueSentence.split(' ');
    return resultSentence;
}

// Desafio 4
function concatName(arrayOfStrings) {
    let resultConcat = arrayOfStrings[arrayOfStrings.length - 1] + ', ' + arrayOfStrings[0];
    return resultConcat;
}

// Desafio 5
function footballPoints(wins, ties) {
    let points = (wins * 3) + (ties * 1);
    return points
}

// Desafio 6
function highestCount(arrayOfNumbers) {
    let biggestNumber = 0;
    let countNumber = 0;
    for (let index in arrayOfNumbers) {
        if (Math.abs(arrayOfNumbers[index]) > biggestNumber) biggestNumber = arrayOfNumbers[index];
    }
    for (let index2 in arrayOfNumbers) {
        if (arrayOfNumbers[index2] === biggestNumber) {
            countNumber += 1
        }
    }
    return countNumber;
}


// Desafio 7
function catAndMouse() {
    // seu código aqui
}

// Desafio 8
function fizzBuzz() {
    // seu código aqui
}

// Desafio 9
function encode() {
    // seu código aqui
}

function decode() {
    // seu código aqui
}

module.exports = {
    calcArea,
    catAndMouse,
    compareTrue,
    concatName,
    decode,
    encode,
    fizzBuzz,
    footballPoints,
    highestCount,
    splitSentence,
};