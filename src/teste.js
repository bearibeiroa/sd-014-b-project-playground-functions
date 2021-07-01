function hydrate(bebida) {
    let numBebida = bebida.replace(/\D/gim, '');
    if (numBebida === 1){
        return numBebida + " copo de água";
    } else {
        return numBebida + " copos de água";
    };
  };

  console.log(hydrate("1 copo asd asfbsac"))