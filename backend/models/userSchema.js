const mongoose=require('mongoose');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const jwt=require('jsonwebtoken');

const userSchema=new mongoose.Schema({
    username:{
        type:String,
        require:true,
    },
    email:{
        type:String,
        require:true,
    },
  
    password:{
        type:String,
        require:true,
    },
  
    phone:{
        type:Number,
        require:true,
    },
    isAdmin:{
        type:Boolean,
        default:false,
    },

});

userSchema.pre('save',async function(next){
    const user=this;
    
    if(!user.isModified("password")){
        next();
    }
    try {
        const hashPassword=await bcrypt.hash(user.password,saltRounds);
        user.password=hashPassword;
    } catch (error) {
      next(error) ; 
    }
});

//user login
userSchema.methods.comparePassword=async function(password){
    return  bcrypt.compare(password,this.password);
}

//json web token
userSchema.methods.generateToken = function () {
    try {
        const token = jwt.sign(
            {
                userId: this._id.toString(),
                email: this.email,
                isAdmin: this.isAdmin,
            },
            process.env.JWT_SECRET_KEY || "fallback_secret", // Fallback in case ENV is missing
            { expiresIn: "1h" }
        );
        // console.log("Generated Token:", token); // Debugging
        return token;
    } catch (error) {
        console.error("Error generating token:", error);
        return null; // Ensure function always returns something
    }
};


module.exports.User_= mongoose.model("User_",userSchema);
