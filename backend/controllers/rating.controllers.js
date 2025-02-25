const {Rating}=require("../models/ratingSchema");

module.exports.rating=async(req,res)=>{
    try {
        let{halfrating,msg,username}=req.body;
        const data=new Rating({
            halfrating,
            msg,
            username
        });
        await data.save();
        res.status(200).json({message:"Thank You for feedback"});
    } catch (error) {
        res.status(500).json({message:"Internal server error"});
    }
}

module.exports.ratingData=async(req,res)=>{
    try {
        const data=await Rating.find({});
        res.status(200).json(data); 
    } catch (error) {
        res.status(500).json({message:"Internal server error"}); 
    }
}