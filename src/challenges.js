// Desafio 1
function compareTrue(par1,par2) {
  if (par1==true &&par2==true){
    return true;
  }else{
    return false;
  }
}

// Desafio 2
function calcArea(base,height) {
 area= (base*height)/2;
 return area;
}

// Desafio 3
function splitSentence(frase) {
  array=frase.split(" ");
  return array;
  
}

// Desafio 4
function concatName(lista) {
  tamList=lista.length
  array= lista.concat();
  final = array[tamList-1]+', '+lista[0];
  return final;
}

// Desafio 5
function footballPoints(wins,ties) {
  points=0;
  points=(wins*3)+(ties*1);
  return points;
}

// Desafio 6
function highestCount(numbers) {
  highnumb=Math.max.apply(null,numbers);
  let contnumb=0;
  for (cont=0;cont<=numbers.length;cont++){
    if (highnumb===numbers[cont]){
      contnumb+=1;
    }
  } 
  return contnumb;  
}

// Desafio 7
function catAndMouse(mouse,cat1,cat2) {
 d1=Math.abs(mouse-cat1);
 d2=Math.abs(mouse-cat2);
 r1="cat1";
 r2="cat2"
 r3="os gatos trombam e o rato foge";
 if(d1>d2){return r2;}
 if(d2>d1){return r1;}
 if(d1==d2){return r3;}
}

// Desafio 8
function fizzBuzz(num) {
  let len=num.length;
  let text=[];
  for(let c=0;c<len;c++){
    if(num[c]%3==0 &&num[c]%5==0){
      text.push("fizzBuzz");}

    else if(num[c]%3!=0 &&num[c]%5!=0){
      text.push("bug!");}

    else if (num[c]%3==0){
      text.push("fizz");}

    else if(num[c]%5==0){
      text.push("buzz");}

  }
  return text;
 
}

// Desafio 9
function encode(w) {
  let frase='';
  for (let l in w) {
  if(w[l]=='a'){frase+='1';}
  else if(w[l]=='e'){frase+='2';}
  else if(w[l]=='i'){frase+='3';}
  else if(w[l]=='o'){frase+='4';}
  else if(w[l]=='u'){frase+='5';}
  else{frase+=w[l];}
  }
  return frase;
}
function decode(w) {
  let frase='';
  for (let l in w){
    if(w[l]=='1'){frase+='a';}
  else if(w[l]=='2'){frase+='e';}
  else if(w[l]=='3'){frase+='i';}
  else if(w[l]=='4'){frase+='o';}
  else if(w[l]=='5'){frase+='u';}
  else{frase+=w[l];}
  }
  return frase;
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
