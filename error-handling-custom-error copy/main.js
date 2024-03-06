class NegativeNumberError extends Error {

    constructor(message) {

        super(message);
        this.name = "NegativeNumberError";
    }
}

function processNumber(num) {

    if (num < 0) {

        throw new NegativeNumberError("Number cannot be negative");
    }

    return num;
}

try {

    const number = -5;
    const result = processNumber(number);
    console.log("Result:", result);
}
catch (error) {

    if (error instanceof NegativeNumberError) {

        console.log("Custom Error:", error.message);
    }

    else {

        console.log("An error occurred:", error.message);
    }
}