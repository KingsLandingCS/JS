function countDownToZero(n) {

    for (let i = n; i >= 0; i--) {

        console.log(i);
    }
}

let userInput = prompt("Enter a number");


countDownToZero(userInput);