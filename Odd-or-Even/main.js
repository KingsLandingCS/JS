const checkBtn = document.querySelector(".check");


function myFunction(value) {


    value = parseInt(value);

    if (isNaN(value)) {

        alert("UserInput is not a number");
        return;
    }

    if (value <= 0) {
        alert("UserInput is either zero or below zero");
        return;
    }

    else if (value % 2 === 0) {

        alert("even");

    } else {

        alert("odd");
    }

}

checkBtn.addEventListener("click", function () {

    let userInput = prompt("Please enter number:");

    alert(myFunction(userInput));

});







