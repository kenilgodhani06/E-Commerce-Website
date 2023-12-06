const mongoose = require('mongoose');

const registerTbl = mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    password : {
        type : String,
        required : true
    },
    role : {
        type : String,
        default : 'user'
    }
})

const user = mongoose.model('user',registerTbl);
module.exports = user;