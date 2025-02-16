const mongoose=require('mongoose');

const contactSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    msg:{
        type:String,
        required:true
    }
});


module.exports.Contact=mongoose.model("Contact",contactSchema);

