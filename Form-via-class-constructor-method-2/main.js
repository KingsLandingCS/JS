
// form blueprint via constructor
class Form {
    constructor(id, method, action) {

        this.formElement = document.createElement("form");
        this.formElement.id = id;
        this.formElement.method = method;
        this.formElement.action = action;

    }

    // addLabelTag Method
    addLabelTag(forAttribute, labelText) {

        let label = document.createElement("label");
        label.setAttribute("for", forAttribute);
        label.textContent = labelText;
        this.formElement.appendChild(label);
    }

    // addInputField Method
    addInputField(type, name, id, placeholder) {

        let input = document.createElement("input");
        input.type = type;
        input.name = name;
        input.id = id;
        input.placeholder = placeholder;
        this.formElement.appendChild(input);

    }


    // addRadioInputField
    addRadioInputField(type, name, id, value) {

        let input = document.createElement("input");
        input.type = type;
        input.name = name;
        input.id = id;
        input.value = value;
        this.formElement.appendChild(input);

    }

    // addSelectField Method
    addSelectField(id, name) {

        let select = document.createElement("select");
        select.id = id;
        select.name = name;
        this.formElement.appendChild(select);
    }

    // addOptionElement Method
    addOptionElement(value) {
        // Find the select element within the formElement
        let select = this.formElement.querySelector("select");
        // Check if the select element exists
        if (select) {
            // If the select element exists, proceed to create and append the option element
            // Create a new option element
            let option = document.createElement("option");
            // Set the value attribute of the option element to the provided value
            option.value = value;
            // Set the text content of the option element to the provided value
            option.textContent = value;
            // Append the option element to the select element
            select.appendChild(option);
        }
    }

    // addTextAreaField Method
    addTextAreaField(name, id, rows) {

        let textarea = document.createElement("textarea");
        textarea.name = name;
        textarea.id = id;
        textarea.rows = rows;
        this.formElement.appendChild(textarea);
    }

    // addSubmitButton Method
    addSubmitButton(type, value) {

        let submit = document.createElement("input");
        submit.type = type;
        submit.value = value;
        this.formElement.appendChild(submit);
    }

    // render method
    render(containerId) {

        let container = document.getElementById(containerId);
        container.appendChild(this.formElement);
    }
}


// Create formContainer in HTML
let formDiv = document.createElement("div");
formDiv.setAttribute("id", "formContainer");
document.body.appendChild(formDiv);


// defining new objects
const myForm = new Form("myForm", "post", "/submit");

myForm.addLabelTag("username", "username: ");
myForm.addInputField("text", "username", "username", "Enter your username");

// address
myForm.addLabelTag("address", " address: ");
myForm.addInputField("text", "address", "address", "Enter your address");


// email
myForm.addLabelTag("email", " email: ");
myForm.addInputField("email", "email", "email", "Enter your password");


// Nationality
myForm.addLabelTag("nationality", " Please select your nationality");
myForm.addSelectField("nationality", "nationality");
myForm.addOptionElement("Pakistan");
myForm.addOptionElement("India");
myForm.addOptionElement("USA");
myForm.addOptionElement("UK");


// Gender
myForm.addLabelTag("gender", " Select your gender");

myForm.addRadioInputField("radio", "gender", "male", "male");
myForm.addLabelTag("male", " Male");
myForm.addInputField("radio", "gender", "female", "female");
myForm.addLabelTag("female", " Female");
myForm.addInputField("radio", "gender", "neutral", "neutral");
myForm.addLabelTag("neutral", " Neutral");


// textarea
myForm.addLabelTag("summary", " summary");
myForm.addTextAreaField("summary", "summary", "4");


// submitbutton
myForm.addSubmitButton("submit", "submit");




myForm.render("formContainer");