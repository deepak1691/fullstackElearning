
module.exports.adminMiddleware=async(req,res,next)=>{
        try {
            const adminRole=req.user.isAdmin;
            if(!adminRole){
                return res.status(403).json({message:"Access denied .You are not a admin"});
            }
            next();
        } catch (error) {
            
        }
}