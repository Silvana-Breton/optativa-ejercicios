let peliculas = [
  "star wars",
  "totoro",
  "rocky",
  "pulp fiction",
  "la vida es bella",
];
//console.log(peliculas[4]);

const titulosMayusculas = (array) => {
  for (let i = 0; i < array.length; i++) {
    array[i] = array[i].toUpperCase();
  }
  return array;
};

//console.log(titulosMayusculas(peliculas));

let peliculasAnimadas = [
  "toy story",
  "finding Nemo",
  "kung-fu panda",
  "wally",
  "fortnite",
];

let ultimoElemento = peliculasAnimadas.pop();
//console.log(ultimoElemento);
//console.log(peliculasAnimadas);

const masPeliculas = (array1, array2) => {
  for (let i = 0; i < array2.length; i++) {
    array2[i] = array2[i].toUpperCase();
    array1.push(array2[i]);
  }
  return array1;
};
//console.log(masPeliculas(peliculas, peliculasAnimadas));

const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8, 4];
const euroScores = [8, 10, 6, 8, 10, 6, 7, 9, 5];

const comparar = (array1, array2) => {
  let resultado = true;
  for (let i = 0; i < array2.length; i++) {
    if (array1[i] != array2[i]) {
      resultado = false;
    }
  }
  return resultado;
};
console.log(comparar(asiaScores, euroScores));
