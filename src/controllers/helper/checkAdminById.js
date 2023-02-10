const {UserModel} = require('../../models/index')

async function checkAdminById ( req , res ,next) {

    const user = await UserModel.findById(req.user._id)

    if(user){
        req.user.admin = user.admin
        next();
        return;
    }
    if(!user){
        res.status(400).json({message: 'somethin bad happended'})
        return
    }

    res.status(400).json({message:"checkAdminById function error"})
    
}

module.exports = {
    checkAdminById
}