function Form(id, method, action) {

    this.formElement = document.createElement("form");
    this.formElement.id = id;
    this.formElement.method = method;
    this.formElement.action = action;
}

Form.prototype.addInputField = function (type, name, placeholder) {

    let input = document.createElement("input");
    input.type = type;
    input.name = name;
    input.placeholder = placeholder;
    this.formElement.appendChild(input);
}

Form.prototype.addSubmitButton = function (value) {

    let submitButton = document.createElement("input");
    submitButton.type = "submit";
    submitButton.value = value;
    this.formElement.appendChild(submitButton);
}

Form.prototype.render = function (containerId) {
    let container = document.getElementById(containerId);
    container.appendChild(this.formElement);
}


let myForm = new Form("myForm", "post", "/submit");

myForm.addInputField("text", "username", "Enter your username");
myForm.addInputField("password", "password", "Enter your password");
myForm.addSubmitButton("submit");
myForm.render("formContainer");