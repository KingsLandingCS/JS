
function myFunction(value) {

    if (value % 2 === 0) {

        return "even";

    } else {

        return "odd";
    }

}

let userInput = prompt("Please enter number:", 7);
let number = parseInt(userInput);



console.log(myFunction(userInput));


