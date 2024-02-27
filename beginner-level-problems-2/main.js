
function myFunction(value) {

    if (value % 2 === 0) {

        return "even";

    } else {

        return "odd";
    }

}

let userInput = prompt("Please enter number:", 7);


alert(myFunction(userInput));


