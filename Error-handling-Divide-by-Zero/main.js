function divideNumbers(a, b) {

    try {

        const result = a / b;

        if (isNaN(result)) {

            throw new Error("Result is not a number");
        }

        return result;

    } catch (error) {

        if (error instanceof Error && error.message.includes("division by zero")) {

            return "Cannot divide by zero";
        }

        else {

            return "An error occurred: " + error.message;
        }
    }
}


console.log(divideNumbers(10, 2));
console.log(divideNumbers(10, 0));
console.log(divideNumbers("abc", 2));