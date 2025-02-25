const {User_}=require("../models/userSchema.js");
const{Contact}=require("../models/contactSchema.js");
const{Service}=require("../models/servicesSchema.js");
const { model } = require("mongoose");

//users data route
module.exports.usersData=async(req,res)=>{
    try {
        const userData=await User_.find({},{password:0});
   if(!userData || userData.length===0){
    return  res.status(404).json({message:"users data not found"});
   }
   return  res.status(200).json({message:"users data",userData});
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}

        //get user id
        module.exports.userIds=async(req,res)=>{
        try {
            let{id}=req.params;
             await User_.findByIdAndDelete(id);
             return res.status(200).json({message:`delete user `});
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: "Internal Server Error" });
        }
            
        }

// user contact data

module.exports.userContacts=async(req,res)=>{
    try {
        const contactData=await Contact.find();
       return res.status(200).json({message:"users contact",contactData});
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error" });
    }
}

//dlt the contact 

module.exports.contactDlt=async(req,res)=>{
    try {
        let{id}=req.params;
         await Contact.findByIdAndDelete(id);
       return res.status(200).json({message:`delete user contact`});
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
        
    }

//edit user data find

module.exports.editUserFind=async(req,res)=>{
    try {
        let{id}=req.params;
       const data= await User_.findById(id,{password:0});

        res.status(200).json({message:"user data for edit",data});
    } catch (error) {
        console.log(error);
        
        res.status(500).json({ message: "Internal Server Error" });
    }
}


    //edit user

 module.exports.editUser=async(req,res)=>{
   try {
    
    let{id}=req.params;
    let{username,email,phone,isAdmin}=req.body;
   await User_.findByIdAndUpdate(id,{
        username,
        email,
        phone,
        isAdmin
    },
    {runValidators:true,new:true}
)
return res.status(200).json({message:`update successfully!!`});
   } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });

   }
    }