const fs = require("fs");

const leer = (ruta, cb) => {
    fs.readFile(ruta, (err, data) => {
        //Leido
        cb(data.toString());
    })
}

const escribir = (ruta, contenido, cb) => {
    fs.writeFile(ruta, contenido, (err) => {
        if(err) {
            console.error("No he podido escribirlo: " + err);
        } else {
            console.log("Se ha escrito correctamente");
        }
    });
}

const borrar = (ruta, cb) => {
    fs.unlink(ruta, cb);
}

// leer(__dirname +"/archivo.txt", console.log);
// escribir(__dirname + "/archivo1.txt", "Soy un archivo nuevo", console.log)
borrar(__dirname + "/archivo1.txt", console.log);
