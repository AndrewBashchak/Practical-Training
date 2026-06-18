const a = 10;
const b = 25;
const c = 15;

console.log(a, b, c);

if (a > b && a > c) {
    console.log("The biggest number is " + a);
} else if (b > a && b > c) {
    console.log("The biggest number is " + b);
} else {
    console.log("The biggest number is " + c);
}
