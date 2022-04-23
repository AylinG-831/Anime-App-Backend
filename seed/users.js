const db = require("../db");
const User = require("../models/user");

db.on("error", console.error.bind(console, "MongoDB connection error: "));


const main = async () => {
        const users = [
            { username: "BoogieWonderland", email: "isGreat@yippie.com"},
            { username: "AriaOfTheSoul", email: "isGood@gaggle.com"},
            { username: "eternalSuffering", email: "isWhatIDeserve@dummy.com"}
        ]
    

    await User.insertMany(users);
    console.log("Created new users!")
};

const run = async () => {
    await main();
    db.close();
};

run();