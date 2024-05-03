let a = [10,2,50,8,100,5];
let n = a.length;

for (let i = 0; i < n - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < n; j++) {
        if (a[j] < a[minIndex]) {
            minIndex = j;
        }
    }
    if (minIndex !== i) {
        let temp = a[i];
        a[i] = a[minIndex];
        a[minIndex] = temp;
    }
}

console.log("Array ordenado:", a);