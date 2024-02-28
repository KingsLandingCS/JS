const randomNumber = Math.floor(Math.random() * 100) + 1;


function startGame() {

    let userInput;

    while (randomNumber !== userInput) {

        userInput = prompt("What is your guess?");

        if (userInput < randomNumber) {

            alert("too low");
        }

        else if (userInput > randomNumber) {

            alert("Too high");
        }

    }

    alert("Congrats! Guess is correct!")

}

startGame();