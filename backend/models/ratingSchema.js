const mongoose=require("mongoose");

const ratingSchema=new mongoose.Schema({
    halfrating:Number,
    msg:String,
    username:String,
    
});

module.exports.Rating=mongoose.model("Rating",ratingSchema);