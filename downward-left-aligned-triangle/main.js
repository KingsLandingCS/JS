function drawTriangle(t){

    for(let i = 1; i <= t; i++){

        let eachLine = ""

        for (let j = 1; j <= i; j++){

            eachLine += j + " "
        }

        eachLine = eachLine.trim();
        console.log(eachLine);
    }
}

let t = 5;
drawTriangle(t);