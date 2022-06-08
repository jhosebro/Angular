// Boolean
let esValido = true;
esValido = false;
// Number
let edad = 12;
// String
let nombre = 'Jhoan';
let apellido = 'Rojas';
let nombre_completo = `${nombre} ${apellido}`;
// Array
let numeros = [1, 3, 4, 5, 6, 7];
let numeros2 = [3, 1, 65, 2];
// Tupla
let sitio = ['Casa', 763021];
// Enum
var Estado;
(function (Estado) {
    Estado[Estado["Offline"] = 0] = "Offline";
    Estado[Estado["Indefinido"] = 1] = "Indefinido";
    Estado[Estado["Online"] = 2] = "Online";
})(Estado || (Estado = {}));
let stat = Estado.Online;
console.log(stat);
// Unknown
let sinTipo = 'Hola';
sinTipo = 32;
sinTipo = true;
let nuevaCadena = 'esto es otra cadena';
// Any
let tipoIndefinido = 'Esto es un mensaje';
nuevaCadena = tipoIndefinido;
// Void
function logger() {
    console.log('Logger');
}
