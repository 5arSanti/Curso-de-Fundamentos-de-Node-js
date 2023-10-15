const hola = async (nombre) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`Hola ${nombre}`);
            resolve(nombre);
            // reject("Hay un error");
        }, 1500);
    });

}

const hablar = async (nombre) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("BLA BLA BLA");
            resolve(nombre);
        }, 1000)
    })

}

const adios = async (nombre) => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            console.log(`Adios ${nombre}`);
            resolve(nombre);
        }, 1000);
    })

}


const main = async() => {
    let nombre = await hola("Santiago");
    await hablar();
    await hablar();
    await hablar();
    await adios(nombre);
    console.log("Termina el proceso");
}

console.log("Empieza el proceso");
main();