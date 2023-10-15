const hola = (nombre, miCallback) => {
    setTimeout(() => {
        console.log(`Hola ${nombre}`);
        miCallback(nombre);
    }, 1500)
}

const adios = (nombre, otroCallback) => {
    setTimeout(() => {
        console.log(`Adios ${nombre}`);
        otroCallback(nombre);
    }, 1000)
}

console.log("INICIANDO");
hola("Santiago", (nombre) => {
    adios(nombre, () => {
        console.log("Terminando proceso");
    })
});

// hola("Santiago", () => {});
// adios("Santiago", () => {});
