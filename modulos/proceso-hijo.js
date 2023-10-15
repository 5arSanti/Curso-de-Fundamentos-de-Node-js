const { exec, spawn } = require("child_process");
// const exec = require("child_process").exec;

// exec("node consola.js", (err, stdout, stderror) => {
//     if (err) {
//         console.error(err);
//         return false;
//     }
//     console.log(stdout);
// })


let proceso = spawn("ls", ["-la"]);

console.log(proceso.pid);
console.log(proceso.connected);

proceso.stdout.on("data", (dato) => {
    console.log("Esta muerto?")
    console.log(process.killed);
    console.log(dato.toString());
});

proceso.on("exit", () => {
    console.log("El proceso terminó");
    console.log(proceso.killed);
})