const mongoose = require("mongoose");

let MONGODB_URI = process.env.PROD_MONGODB || process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/animeListDatabase';

let chooseChaos = "mongodb+srv://kobeni:EextNwD4yUce69cu@cluster0.thwnq.mongodb.net/animeListDatabase?retryWrites=true&w=majority";

mongoose.connect(chooseChaos, { useUnifiedTopology: true, useNewUrlParser: true}).then( () => {
    console.log("Successfully connected to MongoDB");
}).catch((e) => {
    console.error("Connection error", e.message);
})

const db = mongoose.connection;

module.exports = db;