function delay(ms) {

    return new Promise(resolve => setTimeout(resolve, ms));
}


async function simulateAsyncTaskWithTimeout(timeoutDuration) {

    try {

        await delay(timeoutDuration);
        const success = Math.random() < 0.8;
        if (success) {

            return "task completed successfully";
        } else {

            throw new Error("Task failed");
        }
    }
    catch (error) {
        throw error;
    }
}

console.log("Task started");

simulateAsyncTaskWithTimeout(2000)
    .then(result => {

        console.log("Result:", result);
    })
    .catch(error => {

        console.error("Error:", error.message);
    });

console.log("Task scheduled");