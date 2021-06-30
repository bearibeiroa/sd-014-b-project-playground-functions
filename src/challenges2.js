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
function generatePhoneNumber() {
    // seu código aqui
}

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