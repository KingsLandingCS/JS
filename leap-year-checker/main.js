const leapYear = document.querySelector(".leap-year");


function isLeapYear(year) {

    if (year === null) {

        alert("input is null");
        return;
    }

    if ((year % 4 === 0) && (year % 100 !== 0) || (year % 400 === 0)) {

        alert("Leap Year");

    }

    else {

        alert("Not a leap year");
        return;
    }
}


leapYear.addEventListener("click", function () {

    let userInput = prompt("Enter the year");

    isLeapYear(userInput);

});