const checkAvgValue = document.querySelector(".check");




function calculateAverage(newArr) {

    if (!Array.isArray(newArr) || newArr.length === 0) {

        return 0;
    }

    const sum = newArr.reduce((accumulator, currentValue) => {

        return accumulator + currentValue;

    }, 0);

    const average = sum / newArr.length;


    return average;

}





checkAvgValue.addEventListener("click", function () {


    let userInput = prompt("Enter an array");
    let newArr = userInput.split(',').map(Number);

    alert(calculateAverage(newArr));
});