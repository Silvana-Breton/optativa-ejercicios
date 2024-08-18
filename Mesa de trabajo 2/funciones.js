//convertir de pulgadas a centímetros
function convertir(pulgadas) {
  return pulgadas * 2.54;
}
console.log(convertir(3));

//convertir un string en una URL

function url(string) {
  return "http://www." + string + ".com";
}
console.log(url("ahorasisalio"));

//devuelve la frase pero con signos de admiración

function fraseConAdmiracion(string) {
  return "¡" + string + "!";
}
console.log(fraseConAdmiracion("Me salió"));

//calcular edad de perros (funcion espresada)

let edadPerro = function (anios) {
  return anios * 7;
};
console.log(edadPerro(5));

//calcular valor de la hora de trabajo (funcion arrow)

let calcularHora = (sueldo) => sueldo / 40;
console.log(calcularHora(500));
