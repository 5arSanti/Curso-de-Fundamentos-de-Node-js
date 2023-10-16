const http = require("http");

const router = (request, response) => {
    console.log("Nueva Peticion");
    console.log(request.url);

    switch(request.url) {
        case "/hola": 
            let saludo = hola();
            response.write(saludo);
            response.end(); 
            break;
        default: response.write("Error 404: no se lo que quieres");
            response.end();
    }

    //Escribir respuesta al usuario
    // response.writeHead(201, { "Content-Type": "text/plain"});
    // response.write("Hola ya se usar http de node.js")

    // response.end;
}

http.createServer(router).listen(3000);


const hola = () => {
    return ("Hola que tal");
}

console.log("Escuchando http en el puerto 3000");