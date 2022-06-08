// Boolean
let esValido: boolean = true;
esValido = false;

// Number
let edad: number = 12;

// String
let nombre: string = 'Jhoan';
let apellido: string = 'Rojas';

let nombre_completo: string = `${nombre} ${apellido}`;

// Array
let numeros: number[] = [1, 3, 4, 5, 6, 7];
let numeros2: Array<number> = [3, 1, 65, 2];

// Tupla
let sitio: [string, number] = ['Casa', 763021];

// Enum
enum Estado {
    Offline,
    Indefinido,
    Online
}

let stat: Estado = Estado.Online
console.log(stat);

// Unknown
let sinTipo: unknown = 'Hola';
sinTipo = 32;
sinTipo = true;

let nuevaCadena: string = 'esto es otra cadena';

// Any
let tipoIndefinido: any = 'Esto es un mensaje';
nuevaCadena = tipoIndefinido;

// Void
function logger(): void{
    console.log('Logger');
}
