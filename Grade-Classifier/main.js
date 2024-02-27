function calcGrade(n) {

    if (n >= 90 && n <= 100) {

        return "A";
    }

    else if (n >= 80 && n < 90) {

        return "B"
    }

    else if (n >= 70 && n < 80) {

        return "C"
    }

    else if (n >= 60 && n < 70) {

        return "D"
    }

    else if (n >= 50 && n < 60) {

        return "E"
    }

    else if (n >= 0 && n < 50) {

        return "F"
    }

    else {

        return "Invalid Percentage";
    }
}

let yourPercentage = prompt("Enter your percentage:", 78);

if (!isNaN(yourPercentage)) {

    alert(calcGrade(yourPercentage));
}

else {

    alert("Please enter valid Percentage");
}
