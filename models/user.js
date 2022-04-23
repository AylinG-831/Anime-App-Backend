const mongoose = require("mongoose");
const Schema = mongoose.Schema; 

const User = new Schema( 
    {
        username: {type: String, required: true},
        email: {type: String, required: true},
        listArray: {type: Array, required:true, default: []}
    },
    {timestamps: true}
);

module.exports = mongoose.model('user', User)
