const arr = [2, 7, -3, -1, -8, -5];
console.log("Array:", arr);

const sumPositives = arr
    .filter(num => num > 0)
    .reduce((sum, num) => sum + num, 0);
    
console.log("Sum of positive elements:", sumPositives);

let minAbsElement = arr[0];
let maxAbsElement = arr[0]; 

for (let i = 0; i < arr.length; i++) {
    if (Math.abs(arr[i]) < Math.abs(minAbsElement)) {
        minAbsElement = arr[i];
    }
    if (Math.abs(arr[i]) > Math.abs(maxAbsElement)) {
        maxAbsElement = arr[i];
    }
}

const lower = Math.min(minAbsElement, maxAbsElement);
const upper = Math.max(minAbsElement, maxAbsElement);

const betweenElements = arr.filter(num => num > lower && num < upper);
const productBetween =
    betweenElements.length > 0
        ? betweenElements.reduce((prod, num) => prod * num, 1)
        : 0;

console.log("The product of the array elements located between the maximum modulus and the minimum modulus elements:", productBetween);
