const prompt = require('prompt');

prompt.start();

prompt.get(['month'], (err, result) => {
    if (err) {
        console.error(err);
        return;
    }

    const month = Number(result.month);

    if (month < 1 || month > 12 || isNaN(month) || !Number.isInteger(month)) {
        console.log("Incorrect month entered");
    } else if (month === 12 || month === 1 || month === 2) {
        console.log("You were born in winter.");
    } else if (month >= 3 && month <= 5) {
        console.log("You were born in spring.");
    } else if (month >= 6 && month <= 8) {
        console.log("You were born in summer.");
    } else {
        console.log("You were born in autumn.");
    }
});
