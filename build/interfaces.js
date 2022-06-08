function mostrarPersona(pPersona) {
    console.log(pPersona);
}
mostrarPersona({ nombre: 'Sebastian', apellido: 'Holguin', edad: 20 });
function mostrarCoche(pCoche) {
    console.log(`Marca: ${pCoche.marca}. Model: ${pCoche.modelo}`);
    if (pCoche.color) {
        console.log(`Color: ${pCoche.color}`);
    }
    else {
        console.log('El coche no contiene color');
    }
}
mostrarCoche({ marca: 'BMW', modelo: 'M3' });
mostrarCoche({ marca: 'Audi', modelo: 'A4', color: 'Negro' });
let p1 = { x: 210, y: 82 };
const miBusqueda = (v, b) => {
    const result = v.search(b);
    return result > -1;
};
console.log(miBusqueda('hola', 'ola'));
class Adulto {
    constructor(pNombre, pEdad, PCoche) {
        this.coche = PCoche;
        this.nombre = pNombre;
        this.edad = pEdad;
    }
}
class Nino {
}
