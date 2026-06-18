const a = 1.5;
const step = 0.1;
const results = [];

function calculateY(x) {
    if (x < 1.3) {
        return Math.PI * x ** 2 - 7 / x ** 2;
    } else if (x === 1.3) {
        return a * x ** 2 + 7 * Math.sqrt(x);
    } else {
        return Math.log10(x + 7 * Math.sqrt(x));
    }
}

for (let x = 0.8; x < 2.1; x += step) {
    const y = calculateY(x);

    results.push({
        x: x.toFixed(1),
        y: y.toFixed(5)
    });
}

console.table(results);
