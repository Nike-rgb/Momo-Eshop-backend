const mongoose = require('mongoose');

module.exports = mongoose.model('menu', new mongoose.Schema({
    _id : {type : mongoose.Schema.Types.ObjectId},
    name : {type : String},
    size : {type : String},
    price : {type : Number},
    image : {type : String},
}));