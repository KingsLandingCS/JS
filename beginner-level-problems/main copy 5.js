let myArr = [3, 4, 5, 8, 15, 25, 38, 48, 89, 99];

let largest = myArr[0];

for (i = 0; i <= myArr.length; i++) {

    if (myArr[i] > largest) {

        largest = myArr[i];
    }
}

console.log(largest);