const randomNumber = Math.floor(Math.random() * 100) + 1;


function startGame() {

    let userInput = prompt("Your Guess?");

    if (userInput > randomNumber) {

        alert("Too high");
        startGame();
    }

    else if (userInput < randomNumber) {

        alert("Too low");
        startGame();
    }

    alert("Congrats! You won!");
}

startGame();