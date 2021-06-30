// Desafio 7
// return 'cat2' cat2 esteja a 2 unidades de distância do rato e cat1 esteja a 3 unidades de distância do rato

// return 'cat1' cat1 esteja a 6 unidades de distância do rato e cat2 esteja a 12 unidades de distância do rato

// return 'os gatos trombam e o rato foge' se gatos estejam na mesma distância do rato

// expect(catAndMouse(1, 0, 2)).toBe('os gatos trombam e o rato foge');
let mouse = 3;
let cat1 = 8;
let cat2 = 1;

function catAndMouse(mouse, cat1, cat2) {
  let pos1 = Math.abs(cat1 - mouse);
  let pos2 = Math.abs(cat2 - mouse);
  if (pos1 === pos2) {
    return 'os gatos trombam e o rato foge';
  }
  else if (pos1 < pos2) {
    return 'cat1';
  } else {
    return 'cat2';
  }

}
  
console.log(catAndMouse(mouse, cat1, cat2));
