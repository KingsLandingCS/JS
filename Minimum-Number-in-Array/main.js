const checkMinValue = document.querySelector(".check");


function minimumValue(newArr) {

    const minVal = newArr.reduce((accumulator, currentValue) => {

        if (currentValue < accumulator) {

            return currentValue;
        }

        else {

            return accumulator;
        }

    }, Infinity);

    return minVal;
    
}


checkMinValue.addEventListener("click", function () {


    let userInput = prompt("Enter an array");
    let newArr = userInput.split(',').map(Number);

    alert(minimumValue(newArr));


});