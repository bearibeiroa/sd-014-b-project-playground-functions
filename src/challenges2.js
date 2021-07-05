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
function triangleCheck() {
    // seu código aqui
}

// Desafio 13
function hydrate() {
    // seu código aqui
}

module.exports = {
    generatePhoneNumber,
    techList,
    hydrate,
    triangleCheck,
};