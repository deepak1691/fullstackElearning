const {User_}=require("../models/userSchema.js");
const{Contact}=require("../models/contactSchema.js");
const{Service}=require("../models/servicesSchema.js");


module.exports.home=async(req,res)=>{
    try {
        res.status(200).send("welcome to controllers");
    } catch (error) {
        console.log(error);
        
    }
}

module.exports.register=async(req,res)=>{
    try {
        let{username,phone,email,password,isAdmin}=req.body;

        const userExist=await User_.findOne({email});
        if(userExist){
            return res.status(400).json({message:"email already exists!! "});
        }
     
       const newUser=new User_({
        username,
        phone,
        email,
        password,
        isAdmin
       });
    
       res.status(200).json({
        message:"resgistration successfully",
        token:newUser.generateToken(),
        userId:newUser._id.toString()
    })
       await newUser.save();
        
    } catch (error) {
        console.log(error);
        
    }
}


//login useer
module.exports.login=async(req,res)=>{
        try {
            const{password,email}=req.body;
          let userExists= await User_.findOne({email});
         if(!userExists){
            return res.status(400).json({message:"invalid credentials!!"})
        }
        const user=await userExists.comparePassword(password);
      if(user){
        res.status(200).json({
            msg:"Login successfully",
            token:userExists.generateToken(),
            userId:userExists._id.toString()
        })
      }else{
        res.status(401).json({message:"INVALID"});
      }
        
        } catch (error) {
            res.status(500).json("Internal server error!!!");
        }
};

//contact form

module.exports.contact=async(req,res,next)=>{
    try {
        let{username,email,msg}=req.body;
        const newContact=await new Contact({
            username,
            email,
            msg
        });
        await newContact.save();
        res.status(200).json({msg:"contact success!!"});
    } catch (error) {
        next(error);
    }
}

//user login to send user data

module.exports.user=async(req,res)=>{
    try {
        const userData=req.user;
        return res.status(200).json({userData});
    } catch (error) {
        console.log(error);
        
    }
}

//services route

module.exports.services=async(req,res)=>{
    try {
        const serviceData= await Service.find();
        // console.log(serviceData);
        return res.status(200).json({serviceData});
        
    } catch (error) {
        console.log(error);
        
    }
}
