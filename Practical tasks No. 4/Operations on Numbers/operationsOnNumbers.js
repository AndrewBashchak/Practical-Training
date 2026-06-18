const prompt = require('prompt');

prompt.start();

const numbers = [];

askForNumber();

function askForNumber() {
    prompt.get(['number'], (err, result) => {
        if (err) {
            console.error(err);
            return;
        }

        const num = parseFloat(result.number);

        if (num > 10) {
            numbers.push(num);
            console.log(`Number ${num} added to the array.`);
        } else {
            console.log(`Number ${result.number} does not satisfy the condition (must be valid and greater than 10).`);
        }

        if (numbers.length < 10) {
            askForNumber();
        } else {
            processNumbers();
        }
    });
}

function processNumbers() {
    console.log("\nFormed array:", numbers);

    console.log(`\nMinimum: ${Math.min(...numbers)}`);
    console.log(`Maximum: ${Math.max(...numbers)}`);

    const positiveNumbers = numbers.filter(n => n > 0);
    const positiveSum = positiveNumbers.reduce((sum, value) => sum + value, 0);
    const positiveCount = positiveNumbers.length;
    if (positiveCount > 0) {
        console.log(`\nSum of positive numbers: ${positiveSum}, amount of positive numbers: ${positiveCount}`);
    } else {
        console.log("\nThere are no positive numbers in the array.");
    }

    const negativeNumbers = numbers.filter(n => n < 0);
    const negativeProduct = negativeNumbers.reduce((prod, value) => prod * value, 1);
    const negativeCount = negativeNumbers.length;
    if (negativeCount > 0) {
        console.log(`Product of negative numbers: ${negativeProduct}, amount of negative numbers: ${negativeCount}`);
    } else {
        console.log("There are no negative numbers in the array.");
    }

    const arithmeticMean = numbers.reduce((sum, value) => sum + value, 0) / numbers.length;
    console.log(`\nArithmetic mean: ${arithmeticMean}`);
}
