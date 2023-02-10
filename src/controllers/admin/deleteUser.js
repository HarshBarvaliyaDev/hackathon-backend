const { UserModel } = require("../../models/index");
const { deleteUserValidation } = require("../../joiValidations/index");

async function deleteUser(req , res , next) {
    try {
        const validation = deleteUserValidation.validate(req.body);
        if (validation.error) {
            res.status(400).json(validation.error);
            return;
        }

        if(req.user.admin){
            const DeletedUser = await UserModel.findByIdAndDelete(req.body._id)

            if(DeletedUser){
                res.status(200).json({message:"deleted user"})
                return
            }
            res.status(400).json({message:"something went wrong"})
            return
        }

        if(!req.user.admin){
            res.status(400).json({
                message:"cant do this"
            })
            return
        }

        res.status(400).json({message:"something went wrong"})
    } catch (error) {

        console.log("====================== delete User ==========================");
        console.log(error);

    }
}


module.exports = {
    deleteUser
}