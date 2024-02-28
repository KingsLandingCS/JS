const randomNumber = Math.floor(Math.random() * 100) + 1;


function guessNumber() {

    let userInput;

    while (randomNumber !== userInput) {

        userInput = prompt("Your guess?");

        if (userInput > randomNumber) {

            alert("Too high");
        }

        else if (userInput < randomNumber) {

            alert("Too low");
        }
    }

    alert("Congrats! Your guess is correct!");
}

guessNumber();