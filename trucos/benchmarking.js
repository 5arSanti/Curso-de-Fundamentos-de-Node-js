let suma = 0;

console.time("bucle");
for (let i = 0; i < 100; i++) {
    suma += 1;
}
console.timeEnd("bucle");


let suma2 = 0;
console.time("bucle2");
for (let j = 0; j < 100000; j++) {
    suma2 += 1;
}
console.timeEnd("bucle2");

const asincrona = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Termina asincrono");

        }, 1000)
    })
}

console.time("asincrona");
console.log("Empieza el proceso asincrono")
    asincrona()
        .then(() => {
            console.timeEnd("asincrona");
        })