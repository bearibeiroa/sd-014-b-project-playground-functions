// Desafio 10
function techList(techList, name) {
    let arrayList = [];
    techList.sort();
    if (techList.length === 0) {
        return "Vazio!";
    }
    for (index = 0; index < techList.length; index += 1) {
        let objectList = {
            tech: '',
            name: name,
        };
        objectList.tech = techList[index];
        arrayList.push(objectList);
    }

    return arrayList;
}


// Desafio 11
function generatePhoneNumber(array) {
    let phoneNumber = '';
    if (array.length != 11) {
        return 'Array com tamanho incorreto.';
    }
    for (number of array) {
        let quantity = 0;
        for (let index = 0; index < array.length; index += 1) {
            if (number === array[index]) {
                quantity += 1;
            }
            if (quantity >= 3) {
                return 'não é possível gerar um número de telefone com esses valores';
            }
        }
        if (number < 0 || number > 9) {
            return 'não é possível gerar um número de telefone com esses valores';
        }
    }
    phoneNumber = '(' + array[0] + array[1] + ') ' + array[2] + array[3] + array[4] + array[5] + array[6] + '-' + array[7] + array[8] + array[9] + array[10];
    return phoneNumber;
}
let arrayPhone = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1];
console.log(generatePhoneNumber(arrayPhone));


// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
    let sumAB = (lineA + lineB);
    let sumBC = (lineB + lineC);
    let sumAC = (lineA + lineC);

    let difAB = Math.abs(lineA - lineB);
    let difBC = Math.abs(lineB - lineC);
    let difAC = Math.abs(lineA - lineC);

    if (lineA > sumBC || lineB > sumAC || lineC > sumAB) {
        return false;
    } else if (lineA < difBC || lineB < difAC || lineC < difAB) {
        return false;
    } else if (lineA < sumBC || lineB < sumAC || lineC < sumAB) {
        return true;
    } else if (lineA > difBC || lineB > difAC || lineC > difAB) {
        return true;
    }
}


// Desafio 13
// Referências: 
// Para string.replace(/\D/gim, '') - https: //pt.stackoverflow.com/questions/3719/como-obter-apenas-os-n%C3%BAmeros-de-uma-string-em-javascript para o uso do 
// Para uso do parseInt - thread do Slack de 02/07/2021 iniciada por Natalia Martins Turma14 - Tribo B.
function hydrate(string) {
    let number = [];
    let SumOfDrink = 0;
    number = string.replace(/\D/gim, '');

    for (let index = 0; index < number.length; index += 1) {
        SumOfDrink += parseInt(number[index]);
    }
    if (SumOfDrink == 1) {
        return SumOfDrink + ' copo de água';
    } else if (SumOfDrink > 1) {
        return SumOfDrink + ' copos de água';
    }
}

console.log(hydrate("1 cerveja"));


module.exports = {
    generatePhoneNumber,
    techList,
    hydrate,
    triangleCheck,
};