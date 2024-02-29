const checkGrade = document.querySelector(".check-grade");



function calcGrade(n) {

    if (n === null) {

        alert("cancelled");
        return;
    }

    else if (isNaN(n)) {

        alert("Please enter a valid number");
        return
    }


    else if (n >= 90 && n <= 100) {

        alert("A");
    }

    else if (n >= 80 && n < 90) {

        alert("B");
    }

    else if (n >= 70 && n < 80) {

        alert("C");
    }

    else if (n >= 60 && n < 70) {

        alert("D");
    }

    else if (n >= 50 && n < 60) {

        alert("E");
    }

    else if (n >= 0 && n < 50) {

        alert("F");
    }

    else {

        alert("Invalid Percentage");
    }
}

checkGrade.addEventListener("click", function () {

    let yourPercentage = prompt("Enter your percentage:");

    calcGrade(yourPercentage);
})




