try {

    const obj = {

        name: "John",
        age: 30
    };

    console.log(obj.address);

} catch (error) {

    if (error instanceof TypeError) {

        console.log("Property does not exist:", error.message);
    }

    else {

        console.log("An error occurred:", error.message);
    }
}



