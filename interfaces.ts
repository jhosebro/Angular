interface Persona{
    nombre: string;
    apellido: string;
    edad: number;
}

function mostrarPersona(pPersona: Persona) {
    console.log(pPersona);
}

mostrarPersona({ nombre: 'Sebastian', apellido: 'Holguin', edad:20 });

// Propiedades opcionales
interface Coche{
    marca: string;
    modelo: string;
    color?: string;

}

function mostrarCoche(pCoche: Coche) {
        console.log(`Marca: ${pCoche.marca}. Model: ${pCoche.modelo}`);
        if(pCoche.color){
            console.log(`Color: ${pCoche.color}`);
        }else{
            console.log('El coche no contiene color');

        }
}

mostrarCoche({ marca: 'BMW', modelo: 'M3'});
mostrarCoche({ marca: 'Audi', modelo: 'A4', color: 'Negro' });

// Propiedades de solo lectura
interface Punto{
    readonly x: number;
    readonly y: number;
}

let p1: Punto = { x: 210, y: 82};

//Definir una función

interface Busqueda{
    (valor: string, buscar: string): boolean;
}

const miBusqueda: Busqueda = (v: string, b: string): boolean => {
    const result = v.search(b);
    return result > -1;
}

console.log(miBusqueda('hola', 'ola'));

// Interfaz en una clase

interface Humano{
    nombre: string;
    edad: number;

}

class Adulto implements Humano{
    nombre: string;
    edad: number;
    coche: boolean;

    constructor(pNombre: string, pEdad: number, PCoche: boolean) {
        this.coche = PCoche;
        this.nombre = pNombre;
        this.edad= pEdad;
    }
}
class Nino implements Humano{
    nombre: string;
    edad: number;
    colegio: string;
}