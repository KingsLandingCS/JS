const checkBtn = document.querySelector(".check");


function myFunction(value) {


    if (value === null) {
        alert("UserInput is empty");
        return;
    }

    if (isNaN(value)) {

        alert("UserInput is not a number");
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

    myFunction(userInput);

});







