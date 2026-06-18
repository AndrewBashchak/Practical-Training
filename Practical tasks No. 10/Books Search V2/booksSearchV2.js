const prompt = require('prompt-sync')({ sigint: true });
const fs = require('fs');

const books = [];
const numBooks = 6;

console.log("Enter data about 6 books:");

for (let i = 0; i < numBooks; i++) {
    console.log(`\nBook №${i + 1}:`);
    let author = prompt("Author (surname and first name): ");
    let year = Number(prompt("Year of release: "));
    let pages = Number(prompt("Pages: "));
    books.push({ author, year, pages });
}

fs.writeFileSync("books.txt", JSON.stringify(books, null, 2), "utf8");

const filteredBooks = books.filter(book => {
    const surname = book.author.trim().split(" ")[0];
    return surname.charAt(0).toUpperCase() == "A";
});

let resultStr = "";
if (filteredBooks.length == 0) {
    resultStr = "There are no books with an author whose last name begins with 'A'.";
    console.log("\n" + resultStr);
} else {
    console.log("\nInformation about books whose author's last name begins with 'A':");
    filteredBooks.forEach(book => {
        let line = `Author: ${book.author}, year of release: ${book.year}, pages: ${book.pages}`;
        console.log(line);
        resultStr += line + "\n";
    });
}

fs.writeFileSync("results.txt", resultStr, "utf8");
