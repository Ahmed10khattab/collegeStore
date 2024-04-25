const mongoose=require('mongoose');
const { double } = require('webidl-conversions');
const custody=mongoose.Schema({
    name:String,
    amount:String,
},{timestamps:true});

module.exports=mongoose.model('custody',custody);