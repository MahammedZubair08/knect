import User from "../models/User.js";

export const updateProfile= async (req, res) => {
  try {
    const{headline,bio,skills}=req.body;

    const user= await User.findById(req.user._id);
    if(!user){
      return res.status(404).json({message:"User not found"});
    }
    
    if(headline !==undefined) user.headline=headline;
    if(bio !==undefined) user.bio=bio;
    if(skills !== undefined) user.skills=skills;
    const updatedUser= await user.save();
    res.json(updatedUser);
    } catch (error) {
        res.status(500).json({message:"Profile update failed"});
    }
};
