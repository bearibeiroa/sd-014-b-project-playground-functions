function catAndMouse(mouse, cat1, cat2) {
  let cat1Distance = 0;
  let cat2Distance = 0;

   if (mouse > cat1) {
     for (index = mouse; index = cat1; index += 1) {
       cat1Distance += 1;
     }
   } else if (mouse < cat1) {
     for (index =  cat1; index = mouse; index += 1) {
       cat1Distance += 1;
     }
   }
//---//
   if (mouse > cat2) {
    for (index = mouse; index = cat2; index += 1) {
      cat2Distance += 1;
    }
  } else if (mouse < cat2) {
    for (index =  cat2; index = mouse; index += 1) {
      cat2Distance += 1;
    }
  }
//---//
   if (cat1Distance > cat2Distance) {
     return "cat2";
   } else if (cat1Distance < cat2Distance) {
     return "cat1"
   } else {
     return "os gatos se trombam e o rato foge."
   }
  // seu código aqui
} catAndMouse(1, 0, 2);