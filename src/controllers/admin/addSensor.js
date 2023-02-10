const { SensorModel } = require("../../models/index");
const  {addSensorValidation}= require('../../joiValidations/index')

async function addSensor(req, res, next) {
    try {
        const validation = addSensorValidation.validate(req.body);
        if (validation.error) {
            res.status(400).json(validation.error);
            return;
        }

        if (req.user.admin) {
            const newSensor = await new SensorModel(req.body).save();

            if (newSensor) {
                res.status(200).json({ message: "new entry success" });
                return;
            }
            res.status(400).json({ message: "new entry failure" });
            return;
        }

        if (!req.user.admin) {
            res.status(400).json({
                message: "cant do this",
            });
            return;
        }

        res.status(400).json({ message: "something went wrong" });
    } catch (error) {
        console.log(
            "============================== addSensor function======================="
        );
        console.log(error);
    }
}

module.exports = {
    addSensor
}