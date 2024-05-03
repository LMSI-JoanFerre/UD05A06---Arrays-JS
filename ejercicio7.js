let a = [15, 53, 2, 35, 66];
let resultado = [];

for (let i = 0; i < a.length; i++) {
    if (a[i] % 5 === 0) {
        resultado.push(a[i]);
    }
}

console.log("Array de Multiplos de 5: "+resultado);

