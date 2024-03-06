try {

    const obj = {

        name: "John",
        age: null
    };

    console.log(obj.age.length);
}

catch (error) {

    if (error instanceof TypeError) {

        console.log("Property is null:", error.message);
    }

    else {

        console.log("An error occurred:", error.message);
    }
}


