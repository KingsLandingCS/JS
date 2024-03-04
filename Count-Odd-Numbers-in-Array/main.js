const checkOddValue = document.querySelector(".check");


function countOddNumbers(arr) {

    const oddNumbers = arr.filter((num) => {

        return num % 2 !== 0;
    });

    return oddNumbers;

}


checkOddValue.addEventListener("click", function () {


    let userInput = prompt("Enter an array");
    let newArr = userInput.split(",").map(Number);

    alert(countOddNumbers(newArr));

});