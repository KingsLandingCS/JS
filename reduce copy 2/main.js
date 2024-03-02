const people = [

    {
        name: "Dom Perry",
        age: 35
    },

    {
        name: "Andrew Wilksons",
        age: 47
    },

    {
        name: "Brian Walker",
        age: 27
    }

];


const outPut = people.reduce((p, c, i, a) => {

    const split = c.name.split(" ");
    let part = `${split[0][0]} ${split[1][0]}`;

    if(i == a.length - 1){

        part += ".";
    }

    else {

        part += ", ";

    }

    return p + part;
}, " ");


console.log(outPut);