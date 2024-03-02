const numbers = [10, 5, 20, 15, 30];


const largestNumber = numbers.reduce((accumulator, currentValue) => {

    if (currentValue > accumulator) {

        return currentValue;
    }

    else {

        return accumulator;
    }
}, 0);


console.log("The largest number is:", largestNumber);