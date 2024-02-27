function countDownToZero(n) {

    for (let i = n; i >= 0; i--) {

        console.log(i);
    }
}

let userInput = prompt("Enter a number");
let number = parseInt(userInput);

if (!isNaN(number)) {
    alert(countDownToZero(number));
}

else {
    alert("NaN");
}