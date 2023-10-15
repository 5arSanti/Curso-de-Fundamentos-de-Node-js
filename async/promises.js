const hola = (nombre) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`Hola ${nombre}`);
            // resolve(nombre);
            reject("Hay un error");
        }, 1500);
    });

}

const hablar = (nombre) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("BLA BLA BLA");
            resolve(nombre);
        }, 1000)
    })

}

const adios = (nombre) => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            console.log(`Adios ${nombre}`);
            resolve(nombre);
        }, 1000);
    })

}


//------------------
console.log("Iniciando el proceso");
hola("Santiago")
    .then(hablar)
    .then(adios)
    .then((nombre) => {
        console.log("Terminado el proceso");
    })
    .catch((err) => {
        console.log(`HA habido un error: ${err}`);
    })