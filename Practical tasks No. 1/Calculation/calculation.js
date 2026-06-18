const a = 100;
const b = 38;

function calculation() {
    const sum = a + b;
    const division = a / b;
    
    return {
        sum,
        division: division.toFixed(3)
    };
};

console.log(calculation());
