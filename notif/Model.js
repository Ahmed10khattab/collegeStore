const mongoose=require('mongoose');
const { double } = require('webidl-conversions');
const notification=mongoose.Schema({
    nameItem:String,
    countItem:Number,
    message:String,
    username:String
},{timestamps:true});

module.exports=mongoose.model('notification',notification);