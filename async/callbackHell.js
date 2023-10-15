const hola = (nombre, miCallback) => {
    setTimeout(() => {
        console.log(`Hola ${nombre}`);
        miCallback(nombre);
    }, 1500)
}

const hablar = (callbackHablar) => {
    setTimeout(() => {
        console.log("BLA BLA BLA");
        callbackHablar();
    }, 1000)
}

const adios = (nombre, otroCallback) => {
    setTimeout(() => {
        console.log(`Adios ${nombre}`);
        otroCallback(nombre);
    }, 1000);
}

const conversacion = (nombre, veces, callback) => {
    if (veces >= 0){
        hablar(nombre, () => {
            conversacion(nombre, --veces, callback);
        })
    } else {
        adios(nombre, callback);
    }
}

//-------------
console.log("INICIANDO");
hola("Carlos", (nombre) => {
    conversacion(nombre, 5, () => {
        console.log("Proceso Terminado");
    })
})
// hola("Santiago", (nombre) => {
//     adios(nombre, () => {
//         console.log("Terminamos")
//     })
// });
// hola("Santiago", (nombre) => {
//     hablar(() => {
//         hablar(() => {
//             hablar(() => {
//                 adios(nombre, () => {
//                     console.log("Terminando proceso");
//                 })
//             })
//         })
//     })
// });