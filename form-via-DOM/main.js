let form = document.createElement("form");
form.setAttribute("id", "myForm");


let input1 = document.createElement("input");
input1.setAttribute("type", "text");
input1.setAttribute("name", "firstname");
input1.setAttribute("placeholder", "First Name");
form.appendChild(input1);


let input2 = document.createElement("input");
input2.setAttribute("type", "text");
input2.setAttribute("name", "lastName");
input2.setAttribute("placeholder", "Last Name");
form.appendChild(input2);

let submitButton = document.createElement("input");
submitButton.setAttribute("type", "submit");
submitButton.setAttribute("value", "submit");
form.appendChild(submitButton);


const formContainer = document.querySelector(".form-container");
formContainer.appendChild(form);