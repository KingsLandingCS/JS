const accumulateSum = document.querySelector(".accumulate-sum");

function calcFn(n) {

    let sum = 0;
    for (let i = 0; i <= n; i++) {

        sum += i; // Accumulate the sum
    }

    return sum;
}

accumulateSum.addEventListener("click", function () {

    let userInput = prompt("Enter the number");

    if (userInput === null) {

        alert("User input is null");
        return;
    }

    userInput = parseFloat(userInput);

    if (!isNaN(userInput)) {

        alert(calcFn(userInput));
    }

    else {

        alert("User input value is not a number");
    }

});




