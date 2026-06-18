const prompt = require('prompt');

prompt.start();

prompt.get(
    {
        name: 'fullName',
        description: "Enter your full name: first name, last name, middle name (if you have)",
        type: 'string',
        required: true
    },
    (err, result) => {
        if (err) {
            console.error(err);
            return;
        }

        const fullName = result.fullName;
        const lastname = fullName.split(" ")[1];

        let countA = 0;
        for (let char of lastname.toLowerCase()) {
            if (char == "a" || char == "а") {
                countA++;
            }
        }

        console.log(`Letters "a" in the last name (${lastname}): ${countA}`);
    }
);
