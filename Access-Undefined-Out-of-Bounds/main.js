try {

    const array = [1, 2, 3];

    console.log(array[5]);

}
catch (error) {

    if (error instanceof RangeError) {

        console.log("Index is out of bounds:", error.message);
    }

    else {

        console.log("An error occurred:", error.message);
    }

}