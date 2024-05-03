let a = [3, 21, 15, 61, 9, 15];

//Por la posición 15 por el principio
for (let i = 0; i < a.length; i++) {
    if (a[i] === 15) {
        console.log("La posición del elemento 15 es: " + i);
        break;
    }
}

//Por la posición 56 por el principio
for (let i = 0; i < a.length; i++) {
    if (a[i] === 56) {
        console.log("La posición del elemento 56 es: " + i);
        break;
    }
}

//Por la posición 15 por el final
for (let i = a.length - 1; i >= 0; i--) {
    if (a[i] === 15) {
        console.log("La posición del elemento 15 es: " + i);
        break;
    }
}