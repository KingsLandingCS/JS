function fizzBzzFn(n) {




    if (n % 3 === 0 && n % 5 === 0) {

        return "FizzBuzz";
    }

    else if (n % 5 === 0) {

        return "Buzz";
    }

    else if (n % 3 === 0) {

        return "Fizz";
    }

    else {

        return "Not a FizzBuzz number";
    }

}

let userInput = prompt("Enter your number:", 7);

alert(fizzBzzFn(userInput));