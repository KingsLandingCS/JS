const reverseAnArray = document.querySelector(".check");


function reverseArray(arr) {

    const reversedArray = arr.map(Number).reverse();

    return reversedArray;

}




reverseAnArray.addEventListener("click", function () {


    let userInput = prompt("Enter an array");
    let newArr = userInput.split(",").map(Number);

    alert(reverseArray(newArr));

});