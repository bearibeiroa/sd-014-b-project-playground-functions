// Desafio 1
function compareTrue(val1, val2) {
  if (val1 === true && val2 === true) {
    return true
  } else {
    return false
  }
}

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2
  return area
}

// Desafio 3
function splitSentence(frase) {
  let split = []
  let words = ''
  for (let letter of frase) {
    if (letter != " ") {
      words += letter
    } else {
      split.push(words)
      words = ""
    }
  }
  split.push(words)
  return split
}

// Desafio 4
function concatName(itens) {
  return (itens[itens.length -1] + ', ' + itens[0])
}

// Desafio 5
function footballPoints(wins, ties) {
  let points = (wins * 3) + (ties * 1)
  return points
}

// Desafio 6
function highestCount(num) {
  maiorNum = num[0]
  maiorCont = 0
  for (let index = 0; index < num.length; index += 1) {
    if (maiorNum < num[index]) {
      maiorNum = num[index]
    }
  }
  for (let index = 0; index < num.length; index += 1){
    if (maiorNum === num[index]) {
      maiorCont +=1
    }
  }
  return maiorCont
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distCat1 = mouse -cat1
  let distCat2 = cat2 - mouse
  let resultado;

  if (distCat2 < 0) {
    distCat2 = distCat2 * -1
  }
  if (distCat1 < 0) {
    distCat1 = distCat1 * -1
  }

  if (distCat1 === distCat2){
    return "os gatos trombam e o rato foge"
  } else if (distCat1 > distCat2){
    return "cat2"
  } else{
    return "cat1"
  }

}

// Desafio 8
function fizzBuzz(num) {
  let resp = []
  for (let index = 0; index < num.length; index +=1) {
    if ((num[index] % 3) === 0 && (num[index] % 5) === 0) {
      resp.push("fizzBuzz")
    }else if ((num[index] % 3) === 0) {
      resp.push("fizz")
    } else if ((num[index] % 5) === 0) {
      resp.push("buzz")
    } else {
      resp.push("bug!")
    }
  }
  return resp
}

// Desafio 9
function encode(enc) {
  let teste = ""
  for (let index of enc) {
    switch (index) {
      case "a":
        teste += "1"
        break
      case "e":
        teste += "2"
        break
      case "i":
        teste += "3"
        break
      case "o":
        teste += "4"
        break
      case "u":
        teste += "5"
        break
      default:
        teste += index
    }
  }
  return teste
}
function decode(dec) {
  let teste = ""
  for (let index of dec) {
    switch (index) {
      case "1":
        teste += "a"
        break
      case "2":
        teste += "e"
        break
      case "3":
        teste += "i"
        break
      case "4":
        teste += "o"
        break
      case "5":
        teste += "u"
        break
      default:
        teste += index
    }
  }
  return teste
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
