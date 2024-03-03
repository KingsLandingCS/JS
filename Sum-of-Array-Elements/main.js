const arraySumBtn = document.querySelector(".array-sum-btn");




function sumArrayElemnents(yourArr) {


    const sum = yourArr.reduce((accumulator, currentValue) => {

        return accumulator + currentValue;

    }, 0);

    return sum;

}


arraySumBtn.addEventListener("click", function () {


    let userInput = prompt("Enter an Array");
    let numbers = userInput.split(',').map(Number);

    alert(sumArrayElemnents(numbers));
});