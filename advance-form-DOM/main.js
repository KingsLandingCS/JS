var form = document.createElement("form");
form.setAttribute("id", "myForm");

// Create and append input fields
var nameLabel = document.createElement("label");
nameLabel.innerHTML = "Name:";
form.appendChild(nameLabel);

var nameInput = document.createElement("input");
nameInput.setAttribute("type", "text");
nameInput.setAttribute("name", "name");
form.appendChild(nameInput);

var emailLabel = document.createElement("label");
emailLabel.innerHTML = "Email:";
form.appendChild(emailLabel);

var emailInput = document.createElement("input");
emailInput.setAttribute("type", "email");
emailInput.setAttribute("name", "email");
form.appendChild(emailInput);

var passwordLabel = document.createElement("label");
passwordLabel.innerHTML = "Password:";
form.appendChild(passwordLabel);

var passwordInput = document.createElement("input");
passwordInput.setAttribute("type", "password");
passwordInput.setAttribute("name", "password");
form.appendChild(passwordInput);

// Create submit button
var submitButton = document.createElement("input");
submitButton.setAttribute("type", "submit");
submitButton.setAttribute("value", "Submit");
form.appendChild(submitButton);

// Append form to container
var formContainer = document.querySelector(".form-container");
formContainer.appendChild(form);

// Form validation
function handleFormSubmit(event) {
    var nameValue = nameInput.value.trim();
    var emailValue = emailInput.value.trim();
    var passwordValue = passwordInput.value;

    var errorMessages = [];

    // Validate name
    if (nameValue === "") {
        errorMessages.push("Name is required");
    }

    // Validate email
    if (emailValue === "") {
        errorMessages.push("Email is required");
    } else if (!isValidEmail(emailValue)) {
        errorMessages.push("Invalid email format");
    }

    // Validate password
    if (passwordValue === "") {
        errorMessages.push("Password is required");
    } else if (passwordValue.length < 6) {
        errorMessages.push("Password must be at least 6 characters long");
    }

    // Display error messages
    var errorContainer = document.getElementById("error-messages");
    errorContainer.innerHTML = "";
    if (errorMessages.length > 0) {
        event.preventDefault();
        errorMessages.forEach(function (message) {
            var errorElement = document.createElement("div");
            errorElement.classList.add("error");
            errorElement.textContent = message;
            errorContainer.appendChild(errorElement);
        });
    }
}

form.addEventListener("submit", handleFormSubmit);

// Email validation helper function
function isValidEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}
