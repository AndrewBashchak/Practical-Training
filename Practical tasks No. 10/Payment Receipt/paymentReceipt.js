const prompt = require('prompt-sync')({ sigint: true });
const fs = require('fs');

const paymentReceipt = [];

console.log("Enter data about payment receipt for the 1st half of December:\n");

let ordNumber = Number(prompt("Ordinal number: "));
let name = (prompt("Last name, first name, middle name: "));
let regNumber = Number(prompt("Registration number: "));
let sum = Number(prompt("Sum: "));
let receipt = (prompt("Receipt of obtaining: "));
let totalRegNumber = Number(prompt("Total by registration number: "));
let totalAccInfo = (prompt("Total according to information: "));
paymentReceipt.push({ ordNumber, name, regNumber, sum, receipt, totalRegNumber, totalAccInfo });

fs.writeFileSync("paymentReceipt.txt", JSON.stringify(paymentReceipt, null, 2), "utf8");

let resultStr = "";

let result = `Ordinal number: ${ordNumber},
Last name, first name, middle name: ${name},
Registration number: ${regNumber},
Sum: ${sum},
Receipt of obtaining: ${receipt},
Total by registration number: ${totalRegNumber},
Total according to information: ${totalAccInfo}`;

resultStr += result;

fs.writeFileSync("results.txt", resultStr, "utf8");
