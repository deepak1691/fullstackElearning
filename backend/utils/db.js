const mongoose=require('mongoose');
const URI=process.env.MONGO_URI;

const connectDB=async function () {
   try {
    await mongoose.connect(URI);
    console.log("conneced to DB");
    
   } catch (error) {
    console.log(error,"flaid");
    
   }
}

module.exports=connectDB;
