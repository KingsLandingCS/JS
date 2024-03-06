try {

    const invalidJSON = '{"name: "John", "age":}';
    const parsedData = JSON.parse(invalidJSON);

    console.log(parsedData);

} catch (error) {

    if (error instanceof SyntaxError) {

        console.log("Invalid JSON:", error.message);
    }

    else {

        console.log("An error occurred:", error.message);
    }
}