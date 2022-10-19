console.log("Trabajando Consola de NodeJS");
// Bloque Impor

// Bloque variables y constante
let n1 = 15;
let n2 = 32;

// Bloque funciones
const suma = (n1, n2) =>{
    return n1 + n2;
};

// Bloque Programa Principal
for (let i = 1; i < 11; i++){
    console.log(` La operaion para ${i} = ( ${n1} + ${n2}) * ${i} = ${suma(n1, n2) * i} )`);
}


