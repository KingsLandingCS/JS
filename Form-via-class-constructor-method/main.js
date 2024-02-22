class Form {
    constructor(id, method, action) {
        this.formElement = document.createElement("form");
        this.formElement.id = id;
        this.formElement.method = method;
        this.formElement.action = action;

    }

    addInputField(type, name, placeholder) {

        let input = document.createElement("input");
        input.type = type;
        input.name = name;
        input.placeholder = placeholder;
        this.formElement.appendChild(input);
    }

    addSubmitButton(type, value) {

        let submitButton = document.createElement("input");
        submitButton.type = type;
        submitButton.value = value;
        this.formElement.appendChild(submitButton);
    }

    render(containerId) {

        let container = document.getElementById(containerId);
        container.appendChild(this.formElement);
    }

}

let myForm = new Form("myForm", "post", "/submit");

myForm.addInputField("text", "username", "Enter your username");
myForm.addInputField("password", "password", "Enter your password");
myForm.addSubmitButton("submit", "submit");
myForm.render("formContainer");