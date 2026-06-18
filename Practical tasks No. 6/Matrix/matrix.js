const N = 20;
const M = 15;

let matrix = Array.from({ length: N }, () =>
    Array.from({ length: M }, () => Math.floor(Math.random() * 10))
);

console.log("Matrix A:");

matrix.forEach(row => console.log(row.join(" ")));

console.log("\nSums and counts of elements:");
console.log("Sum | Count");

matrix.forEach(row => {
    const sum = row.reduce((acc, num) => acc + num, 0);
    const count = row.length;
    console.log(`${sum.toString().padEnd(3)} | ${count}`);
});
