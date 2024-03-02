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


const oldestAge = people.reduce((p, c) => {

    if (c.age > p) {

        return c.age;
    }

    return p;

}, 0);


console.log(oldestAge);