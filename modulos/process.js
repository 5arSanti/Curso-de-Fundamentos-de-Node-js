// const process = require("process");

process.on("beforeExit", () => {
    console.log("El proceso va a terminar");
})

process.on("exit", () => {
    console.log("Ale, el proceso acabo");
})

process.on("uncaughtException", (err, origin) => {
    console.log("Vaya se nos ha olvidado capturar un error");
    console.error(err.message);
});
// process.on("uncaughtRejection");


funcionQUeNoExiste();
console.log("Esto si el error no se recoje, no sale")