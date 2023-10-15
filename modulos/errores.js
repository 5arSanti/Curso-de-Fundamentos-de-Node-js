const otraFuncion = () => {
    return seRompe();
}

const seRompe = () => {
    return 3 + z;
}

const seRompeAsincrona = (cb) => {
    setTimeout(() => {
        try {
            return 3 + z;
        } catch (err) {
            console.error("Error en mi funcion asincrona");
            cb(err)
        }
    }, 1000)
}


try {
    // otraFuncion();
    seRompeAsincrona((err) => {
        console.log("Hay error", err.message);
    });

} catch (err) {
    console.error("Vaya, algo se ha roto:");
}

console.log("Esto es el final");