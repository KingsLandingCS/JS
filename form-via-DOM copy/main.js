const form = document.createElement("form");
form.setAttribute("id", "myForm");

const label1 = document.createElement("label");
label1.innerHTML = "First Name";
label1.style.display = "block";
form.appendChild(label1);

const input1 = document.createElement("input");
input1.setAttribute("type", "text");
input1.setAttribute("name", "fname");
input1.setAttribute("placeholder", "First Name");
input1.style.marginBottom = "10px";
input1.addEventListener("focus", function () {
    input1.style.borderColor = "blue";
});
form.appendChild(input1);

const label2 = document.createElement("label");
label2.innerHTML = "Last Name";
label2.style.display = "block";
form.appendChild(label2);

const input2 = document.createElement("input");
input2.setAttribute("type", "text");
input2.setAttribute("name", "lname");
input2.setAttribute("placeholder", "Last Name");
input2.style.marginBottom = "10px";
input2.addEventListener("focus", function () {
    input2.style.borderColor = "blue";
});
form.appendChild(input2);

const submitButton = document.createElement("input");
submitButton.setAttribute("type", "submit");
submitButton.setAttribute("name", "submit");
submitButton.style.marginTop = "10px";
form.appendChild(submitButton);


const formContainer = document.querySelector(".form-container");
formContainer.appendChild(form);
