//Ejercicio 1
function mostrarNumerosSiguientes(numero) {
  for (let indice = 1; indice <= 10; indice++) {
    console.log(numero + indice);
  }
}
mostrarNumerosSiguientes(2);
//Ejercicio 2
let imprimirDeTresEnTres = function () {
  for (let indice = 5; indice <= 20; indice += 3) {
    console.log(indice);
  }
};
console.log("mostrando ejercicio 2");
imprimirDeTresEnTres();
//Ejercicio 3
function sumatoriaDeTodosLosNumeros() {
  let sumatoria = 0;
  for (let indice = 0; indice <= 100; indice++) {
    sumatoria = sumatoria + indice;
  }
  console.log("La sumatoria es: " + sumatoria);
}
console.log("mostrando ejercicio 3");
sumatoriaDeTodosLosNumeros();
//Ejercicio 4
function factorialDeUnNumero(numero) {
  let factorial = 1;
  for (let indice = 1; indice <= numero; indice++) {
    factorial = factorial * indice;
  }
  console.log("El factoral del " + numero + " es " + factorial);
}
console.log("mostrando ejercicio 4");
factorialDeUnNumero(3);
//Ejercicio 5
