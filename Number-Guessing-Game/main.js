const randomNumber = Math.floor(Math.random() * 100) + 1;
const guessBtn = document.querySelector(".guess-game");



guessBtn.addEventListener("click", function () {

    let userInput;

    while (randomNumber !== userInput) {

        userInput = prompt("Your guess?");

        if (userInput === null) {

            alert("Game stopped");
            return;
        }

        else if (isNaN(userInput)) {

            alert("Please enter a valid number");
            continue;
        }

        userInput = parseInt(userInput);

        if (userInput < randomNumber) {

            alert("Too low");
        }

        else if (userInput > randomNumber) {

            alert("Too high");
        }
    }

    alert("Congrats! Your guess is correct!");


});



