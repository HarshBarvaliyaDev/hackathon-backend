const { SensorModel } = require("../../models/index");
const { getLevelByIdValidation } = require("../../joiValidations/index");

async function getLevelById(req, res, next) {
    const validation = getLevelByIdValidation.validate(req.body);
    if (validation.error) {
        res.status(400).json(validation.error);
        return;
    }

    const tankData = await SensorModel.findById(req.body._id);

    if (tankData) {
        res.status(200).json(tankData);
        return;
    }
    if (!tankData) {
        res.status(400).json({ message: "data not found" });
        return;
    }

    res.status(400).json({ message: "something bad happend" });
    return;
}

module.exports={
    getLevelById
}