function calcFactorial(n) {

    if (n < 0) {

        return "unable to calculate";
    }

    else if (n === 0 || n === 1) {

        return 1;
    }
    else {

        return n * calcFactorial(n - 1);
    }

}

let userInput = prompt("Enter your number");
let number = parseInt(userInput);

if (!isNaN(number)) {

    alert(calcFactorial(number));
}

else {

    alert("Not a Number");
}