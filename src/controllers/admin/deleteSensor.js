const { UserModel, SensorModel } = require("../../models/index");
const { deleteSensorValidation } = require("../../joiValidations/index");

async function deleteSensor(req , res , next) {
    try {
        const validation = deleteSensorValidation.validate(req.body);
        if (validation.error) {
            res.status(400).json(validation.error);
            return;
        }

        if(req.user.admin){
            const deletedSensor = await SensorModel.findByIdAndDelete(req.body._id)

            if(deletedSensor){
                res.status(200).json({message:"deleted sensor " + deletedSensor._id})
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
    deleteSensor
}