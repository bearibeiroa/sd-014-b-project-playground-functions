function catAndMouse(mouse,cat1,cat2) {
  
  let distancia1 = cat1 - mouse;
  let distancia2 = cat2 - mouse;
  
  if (distancia1 < 0){
    distancia1 = distancia1 *-1;

  }if  (distancia2 < 0){
    distancia2 = distancia2 *-1;
  }
  
  if(distancia1 === distancia2){
    
    return 'os gatos trombam e o rato foge';
  }else if (distancia1 > distancia2){
    return 'cat2';
  }else{
     return 'cat1';
  }
  ;
}
console.log(catAndMouse(5,7,6))
