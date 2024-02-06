const mongoose = require("mongoose");

async function main() {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/test");
    } catch (err) {
        throw err; // Re-throwing the error to be caught by the promise chain
    }
}

main().then(() => {
    console.log("connection success");
}).catch(err => {
    console.error("Connection error:", err);
    process.exit(1); // Exiting the process due to connection error
});
