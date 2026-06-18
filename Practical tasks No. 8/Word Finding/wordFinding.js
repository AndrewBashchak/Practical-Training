const prompt = require('prompt');

prompt.start();

prompt.get({
    name: 'text',
    description: 'Enter text (maximum length 50 characters)',
    type: 'string',
    required: true,

    conform: function (value) {
        return value.length <= 50;
    },
    message: 'The text must contain no more than 50 characters!'
},
    (err, result) => {
    if (err) {
        console.error(err);
        return;
    }

    const text = result.text;
    const word = "мама";
    let positions = [];
        for (let i = 0; i <= text.length; i++) {
            if (text.substring(i, i + word.length).toLowerCase() === word) {
                positions.push(i);
            }
        }    

    if (positions.length > 0) {
        console.log(`Number of occurrences of the word "${word}": ${positions.length}`);
        console.log(`First occurrence positions: ${positions.join(", ")}`);
    } else {
        console.log(`The word "${word}" was not found in the given string.`);
    }
});
