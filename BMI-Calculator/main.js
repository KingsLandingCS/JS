function calcBMIFn() {

    let BMI = userWeight / Math.pow(userHeight, 2);

    alert(BMI);
}



let userWeight = prompt("Your weight");

let userHeight = prompt("Your height");


calcBMIFn();