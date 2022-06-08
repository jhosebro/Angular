//function sumar(a, b) {
//    return a + b;
//}
const sumar = function (a, b) {
    return a + b;
};
const sumar2 = function (a, b) {
    return a + b;
};
const sumar3 = function (a, b) {
    return a + b;
};
// Parametros opcionales y valores por defecto
function nombreCompleto(nombre, apellido = 'Peña') {
    if (apellido)
        return nombre + " " + apellido;
    else
        return nombre;
}
console.log(nombreCompleto('Ruben'));
console.log(nombreCompleto('Dario', 'Correa'));
// Parámetros REST
function nombreCompleto3(nombre, ...restoNombre) {
    return nombre + " " + restoNombre.join(' ');
}
console.log(nombreCompleto3('Laura', 'Daniela', 'Garcia', 'Martinez'));
