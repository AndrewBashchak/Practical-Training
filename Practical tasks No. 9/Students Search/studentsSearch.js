const students = [
    { surname: "Бащак", group: "ІПЗс-24-2", speciality: "Інженерія програмного забезпечення", avgScore: 11.2 },
    { surname: "Світлик", group: "ІПЗс-24-2", speciality: "Інженерія програмного забезпечення", avgScore: 7.9 },
    { surname: "Погорельцева", group: "Ас-24-1", speciality: "Архітектура й містобудування", avgScore: 8.3 },
    { surname: "Таркані", group: "Бс-24-1", speciality: "Будівництво та цивільна інженерія", avgScore: 6.7 },
    { surname: "Нікітіна", group: "ФБСс-24-1", speciality: "Фінанси, банківська справа, страхування та фондовий ринок", avgScore: 8.0 },
    { surname: "Гринишин", group: "ІПЗс-24-1", speciality: "Інженерія програмного забезпечення", avgScore: 9.8 }
];

const avarangeScore = students.filter(student => student.avgScore >= 8);

if (avarangeScore.length == 0) {
    console.log("There are no students with an average score above 8.");
} else {
    console.log(`${avarangeScore.length} students with an average score above 8`);
    console.log("\nInformation about these students:");
    avarangeScore.forEach(student => {
        console.log(`Surname: ${student.surname}, group: ${student.group}, speciality: ${student.speciality}, average score: ${student.avgScore}`);
    });
}
