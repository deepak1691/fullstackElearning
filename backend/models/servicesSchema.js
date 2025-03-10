const mongoose=require('mongoose');

const serviceSchema=new mongoose.Schema({
    service:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    provider:{
        type:String,
        required:true
    },
});

module.exports.Service=mongoose.model("Service",serviceSchema);