// Desafio 1
function compareTrue(param1,param2) {
  if (param1 === true && param2 === true){
    return true;
  } else {
    return false;
  }
}


// Desafio 2
function calcArea(base,height) {
  area = (base*height)/2;
  return area;
}


// Desafio 3
function splitSentence(str) {
  let armazenaStr = "";
  let espaco = " ";
  for (index=0;index<str.length;index+=1){
    if (str[index] != espaco){
      
    }
  }

}



// Desafio 4
function concatName(array) {
  let name1 = array[array.length-1];
  let name2 = array[0];
  let namesummed = name1 + ', '+ name2;
  return namesummed;
}


// Desafio 5
function footballPoints(wins,ties) {
  let winspoints = wins*3;
  let tiespoints = ties;
  let totalpoints = winspoints+tiespoints;
  return totalpoints;
}


// Desafio 6
function highestCount() {
  
}

// Desafio 7
function catAndMouse(mouse,cat1,cat2) {
  mousecat1 = mouse - cat1;
  mousecat2 = mouse - cat2;
  if (mousecat1<0){
    mousecat1 = mousecat1*(-1);
  }
  if (mousecat2<0){
    mousecat2 = mousecat2*(-1);
  }
  if (mousecat1>mousecat2){
    return "cat2";
  } else if (mousecat1<mousecat2){
    return "cat1";
  } else {
    return "os gatos trombam e o rato foge";
  }
}

// Desafio 8
function fizzBuzz(ary) {
  testfizzbuzz = [];
  for (let index2 = 0; index2 < ary.length; index2 +=1){
    if (ary[index2] % 3 == 0 && ary[index2] % 5 != 0){
      testfizzbuzz.push("fizz");
    } else if (ary[index2] % 3 != 0 && ary[index2] % 5 == 0){
      testfizzbuzz.push("buzz");
    } else if (ary[index2] % 3 == 0 && ary[index2] % 5 == 0){
      testfizzbuzz.push("fizzBuzz");
    } else {
     testfizzbuzz.push("bug!");
    } 
  }
  return testfizzbuzz;
}
console.log(fizzBuzz([9, 25]));

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
