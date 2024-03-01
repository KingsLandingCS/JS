const checkBtn = document.querySelector(".check");



function isVowel(value) {

    let val = value.toLowerCase();

    if (value === null) {

        alert("Please enter a value");
        return;
    }

    else if (!isNaN(value)) {

        alert("Please enter a valid value");
        return;
    }

    else if (val === "a" || val === "e" || val === "i" || val === "o" || val === "u") {

        alert("it is a vowel");
        return;
    }

    else {

        alert("it is a consonant");
        return;
    }
}


checkBtn.addEventListener("click", function () {

    let userInput = prompt("Enter an alphabet");

    isVowel(userInput);

});