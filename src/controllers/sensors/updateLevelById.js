const { SensorModel } = require("../../models/index");
const { updateLevelByIdValidation } = require("../../joiValidations/index");

async function updateLevelById(req, res, next) {
    const validation = updateLevelByIdValidation.validate(req.body);
    if (validation.error) {
        res.status(400).json(validation.error);
        return;
    }

    if (
        (req.body.dataToUpdate.high && req.body.dataToUpdate.medium) ||
        (req.body.dataToUpdate.high && req.body.dataToUpdate.low) ||
        (req.body.dataToUpdate.medium && req.body.dataToUpdate.low)
    ) {
        res.status(400).json({message:" any one of [high , medium , low] is updated"})
        return
    }
    let levels = ['high' , 'medium' , 'low']

    levels.filter((value)=>{ 
        return !(value==Object.keys(req.body.dataToUpdate)[0])
    }).forEach((value)=>{
        req.body.dataToUpdate[value] = false
   
    })
    const entry = await SensorModel.findByIdAndUpdate(
        req.body._id,
        req.body.dataToUpdate
    );

    if (entry) {
        res.status(200).json({ message: "updated the value" });
        return;
    }
    res.status(400).json({ message: "error in updateLevelById" });
}

module.exports = {
    updateLevelById,
};
