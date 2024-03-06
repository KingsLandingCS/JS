try {

    console.log(undefinedVariable);

} catch (error) {

    if (error instanceof ReferenceError) {

        console.log("Varialble is not declared", error.message);
    }

    else {

        console.log(("An error occurred", error.message));
    }

}



