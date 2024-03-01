const calcGCD = document.querySelector(".check");

function gcd(a, b) {
    a = Math.abs(Math.floor(a));
    b = Math.abs(Math.floor(b));

    while (b !== 0) {
        // Display intermediate result
        alert("Intermediate result: " + b + ", " + (a % b));

        // Calculate next step in the Euclidean algorithm
        const temp = b;
        b = a % b;
        a = temp;
    }

    // Once b becomes 0, a contains the GCD
    return a;
}

calcGCD.addEventListener("click", function () {
    let userInput = prompt("Enter the first number");
    let userInput2 = prompt("Enter the second number");

    // Convert user inputs to numbers
    userInput = parseFloat(userInput);
    userInput2 = parseFloat(userInput2);

    // Call gcd function and display the final result
    alert("GCD: " + gcd(userInput, userInput2));
});