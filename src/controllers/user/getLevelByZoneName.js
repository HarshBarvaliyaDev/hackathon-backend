const { SensorModel } = require("../../models/index");
const { getLevelByZoneNameValidation } = require("../../joiValidations/index");

async function getLevelByZoneName(req, res, next) {
    const validation = getLevelByZoneNameValidation.validate(req.body);
    if (validation.error) {
        res.status(400).json(validation.error);
        return;
    }

    const allTankOfZone = await SensorModel.find({zone : req.body.zone})

    if (allTankOfZone.length) {
        res.status(200).json(allTankOfZone);
        return;
    }
    if (!allTankOfZone.length) {
        res.status(400).json({ message: "data not found" });
        return;
    }

    res.status(400).json({ message: "something bad happend" });
    return;
}

module.exports={
    getLevelByZoneName
}