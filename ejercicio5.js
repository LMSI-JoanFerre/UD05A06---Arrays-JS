let a = [24, 53, 2, 35, 66];
let encontrado = false;

for (let i = 0; i < a.length; i++) {
    if (a[i] % 2 === 0) {
        encontrado = true;
        break;
    }
}

if (encontrado) {
    console.log("Se encontró un número par en el array.");
} else {
    console.log("No se encontró ningún número par en el array.");
}
