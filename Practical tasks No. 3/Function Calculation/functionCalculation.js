const A = Math.PI / 4;
const B = Math.PI / 2;
const M = 15;
const H = (B - A) / M;

for (let i = 0; i <= M; i++) {
    const xi = A + i * H;
    const fx = Math.sin(xi);
    console.log(`x[${i}] = ${fx.toFixed(4)}`);
};
