const books = [
    { author: "Антонов Іван", year: 1999, pages: 24 },
    { author: "Бащак Андрій", year: 2005, pages: 104 },
    { author: "Андрійчук Олена", year: 2019, pages: 180 },
    { author: "Світлик Дмитро", year: 2015, pages: 350 },
    { author: "Нікітіна Ксенія", year: 2022, pages: 221 },
    { author: "Гринишин Вікторія", year: 2006, pages: 407 }
];

const filteredBooks = books.filter(book => {
    const surname = book.author.trim().split(" ")[0];
    return surname.charAt(0).toUpperCase() == "А";
});

if (filteredBooks.length == 0) {
    console.log("There are no books with an author whose last name begins with 'А'.");
} else {
    filteredBooks.forEach(book => {
        console.log(`Author: ${book.author}, year of release: ${book.year}, pages: ${book.pages}`);
    });
}
  