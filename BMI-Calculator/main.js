// let userWeight = prompt("Your weight");

// let userHeight = prompt("Your height");

const calcBtn = document.querySelector(".calc-button");


function calcBMIFn(weight, height) {

    let BMI = weight / Math.pow(height, 2);

    alert("Your BMI is: " + BMI);
}


calcBtn.addEventListener("click", function () {

    let weightInput = document.getElementById("weight").value;
    let heightInput = document.getElementById("height").value;

    if (isNaN(weightInput) || isNaN(heightInput) || weightInput <= 0 || heightInput <= 0) {

        alert("Invalid value, please enter correct values.");
        return;
    }

    calcBMIFn(weightInput, heightInput);

});





