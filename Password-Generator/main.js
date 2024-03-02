const generatePasswordBtn = document.querySelector(".generate-password");




function generatePassword(length) {

    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()-_";

    let password = "";

    for (let i = 0; i < length; i++) {

        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }

    return password;
}


generatePasswordBtn.addEventListener("click", function () {

    const passwordLength = parseInt(prompt("Enter the length of the password:"));


    if (isNaN(passwordLength) || passwordLength <= 0) {

        alert("Please enter a valid positive number for the password length.");

        return;
    }



    alert("Your new Password is: " + generatePassword(passwordLength));

});