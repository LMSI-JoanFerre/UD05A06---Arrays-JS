let str = "abcdefg";

for (let i = 0; i < str.length; i++) {
    let letra = str[i].toLowerCase();
    if (letra === "a" || letra === "e" || letra === "i" || letra === "o" || letra === "u") {
        console.log("La letra '" + str[i] + " es una vocal.");
    } else {
        console.log("La letra '" + str[i] + " es una consonante.");
    }
}
