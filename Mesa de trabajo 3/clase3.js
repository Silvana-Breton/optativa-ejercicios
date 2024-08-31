//let edad = 58; //(el número es a modo de ejemplo, podés cambiarlo o crear otras para tener varias pruebas)

let bienvenido = (edad) => {
  if (edad < 0) {
    console.log("Error, edad inválida. Por favor ingrese un número válido.");
  } else if (edad < 18) {
    console.log("No puede pasar al bar.");
  } else if (edad < 21) {
    console.log("Puede pasar al bar, pero no puede tomar alcohol.");
  } else if (edad == 21) {
    console.log("Felicitaciones por la mayoría de edad");
    console.log("Puede pasar al bar y tomar alcohol.");
  } else {
    console.log("Puede pasar al bar y tomar alcohol.");
  }
  if (edadImpar(edad) && edad >= 0) {
    console.log("Sabías que tu edad es impar?");
  }
};

let edadImpar = (a) => a % 2;

bienvenido(21);
