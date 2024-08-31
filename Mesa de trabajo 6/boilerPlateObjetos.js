//la lista de clientes.
let arrayCuentas = [
  {
    nroCuenta: 5486273622,
    tipoDeCuenta: "Cuenta Corriente",
    saldoEnPesos: 27771,
    titularCuenta: "Abigael Natte",
  },
  {
    nroCuenta: 1183971869,
    tipoDeCuenta: "Caja de Ahorro",
    saldoEnPesos: 8675,
    titularCuenta: "Ramon Connell",
  },
  {
    nroCuenta: 9582019689,
    tipoDeCuenta: "Caja de Ahorro",
    saldoEnPesos: 27363,
    titularCuenta: "Jarret Lafuente",
  },
  {
    nroCuenta: 1761924656,
    tipoDeCuenta: "Cuenta Corriente",
    saldoEnPesos: 32415,
    titularCuenta: "Ansel Ardley",
  },
  {
    nroCuenta: 7401971607,
    tipoDeCuenta: "Cuenta Unica",
    saldoEnPesos: 18789,
    titularCuenta: "Jacki Shurmer",
  },
];
// podes continuar tu codigo a partir de aca!

let banco = {
  clientes: arrayCuentas,
  consultarCliente: function (titular) {
    let clienteEncontrado = this.clientes.find(
      (cliente) => cliente.titularCuenta == titular
    );
    return clienteEncontrado;
  },
  deposito: function (titularDeCuente, cantidadDeDinero) {
    let clienteEncontrado = this.consultarCliente(titularDeCuente);
    clienteEncontrado.saldoEnPesos += cantidadDeDinero;
    return clienteEncontrado;
  },
  extraccion: function (titularDeCuente, cantidadDeDinero) {
    let clienteEncontrado = this.consultarCliente(titularDeCuente);
    clienteEncontrado.saldoEnPesos -= cantidadDeDinero;
    return clienteEncontrado;
  },
};
console.log(banco.extraccion("Jacki Shurmer", 700));
``;
