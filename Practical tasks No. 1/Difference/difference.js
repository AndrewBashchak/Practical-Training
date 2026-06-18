const prompt = require('prompt');

const baptismOfRus = 988;
console.log('The Baptism of Rus took place in the year ' + baptismOfRus + '.');

prompt.start();

prompt.get(['current_year'], (err, result) => {
    if (err) {
        console.error(err);
        return;
    };

    if (result.current_year < baptismOfRus) {
        console.log('The baptism of Rus has not yet taken place.');
        return;
    };

    const yearsPassed = result.current_year - baptismOfRus;
    console.log(yearsPassed + ' years have passed since the Baptism of Rus.');
});
