const predefinedPassword = "Mascot123";

function checkPassword(enteredPassword) {

    if (enteredPassword === predefinedPassword) {

        return "Access Granted";
    }

    else {

        return "Access Denied";
    }
}


let userInput = prompt("Enter password");


alert(checkPassword(userInput));