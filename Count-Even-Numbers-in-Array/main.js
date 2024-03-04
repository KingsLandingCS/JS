const checkEvenValue = document.querySelector(".check");


function countEvenNumbers(arr) {

    const evenNumbers = arr.filter((num) => {

        return num % 2 === 0;
    });

    return evenNumbers;

}


checkEvenValue.addEventListener("click", function () {


    let userInput = prompt("Enter an array");
    let newArr = userInput.split(",").map(Number);

    alert(countEvenNumbers(newArr));

});