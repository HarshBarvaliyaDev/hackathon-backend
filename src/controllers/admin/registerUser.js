const {UserModel} = require("../../models/index");
const { registerUserValidation } = require("../../joiValidations/index");

async function registerUser(req, res, next) {
    try {
        const validation = registerUserValidation.validate(req.body);
        if (validation.error) {
            res.status(400).json(validation.error);
            return;
        }

        if(req.user.admin){
            const existingUser = await UserModel.findOne({email: req.body.email})
            if(existingUser){
                res.status(400).json({message:"user already exists"})
                return;
            }
            if(!existingUser){
                await new UserModel(req.body).save().then(
                    res.status(200).json({message:"user registerd"})
                ).catch((err)=>{
                    console.log(err);
                })
                return
            }

        }

        if(!req.user.admin){
            res.status(400).json({
                message:"cant do this"
            })
            return
        }

        res.status(400).json({message:"something went wrong"})
        
    } catch (error) {
            console.log("===========================register User============================")
            console.log(error)
    }
}


module.exports = {
    registerUser
}