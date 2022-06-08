//function sumar(a, b) {
//    return a + b;
//}

const sumar: (a: number, b: number) => number= function(a: number, b: number): number {
    return a + b;
}

const sumar2 = function (a: number, b: number): number{
    return a + b;
}

const sumar3: (a: number, b: number) => number = function (a, b) {
    return a + b;
}

// Parametros opcionales y valores por defecto

function nombreCompleto(nombre: string, apellido: string ='Peña'): string{
    if(apellido) return nombre + " " + apellido;
    else return nombre;
}

console.log(nombreCompleto('Ruben'));
console.log(nombreCompleto('Dario','Correa'));

// Parámetros REST
function nombreCompleto3 (nombre: string, ...restoNombre: string[]): string{
    return nombre + " " + restoNombre.join(' ');
}

console.log(nombreCompleto3('Laura', 'Daniela', 'Garcia', 'Martinez'));