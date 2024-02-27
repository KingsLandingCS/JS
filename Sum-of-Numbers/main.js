function calcFn(n) {

    let sum = 0;
    for (let i = 0; i <= n; i++) {

        sum += i; // Accumulate the sum
    }

    return sum;
}

let userInput = prompt("Enter the number");
let number = parseInt(userInput);


if (!isNaN(number)) {

    alert(calcFn(userInput));

}


else {

    alert(NaN);

}