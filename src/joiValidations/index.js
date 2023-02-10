const Joi = require("joi");

// controller/user Validation

const getLevelByIdValidation = Joi.object({
    _id: Joi.string()
        .length(24)
        .pattern(/^[a-z0-9]+$/)
        .required(),
}).required();

const getLevelByZoneNameValidation = Joi.object({
    zone: Joi.string().valid("south", "north", "east", "west").required(),
}).required();

const loginValidation = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string()
        .regex(
            /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,20}$/
        )
        .required(),
}).required();

// controller/admin Validation

const registerUserValidation = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string()
        .regex(
            /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,20}$/
        )
        .required(),
    admin: Joi.boolean().required(),
}).required();

const deleteSensorValidation = Joi.object({
    _id: Joi.string()
        .length(24)
        .pattern(/^[a-z0-9]+$/)
        .required(),
}).required();

const addSensorValidation = Joi.object({
    zone: Joi.string().valid("south", "north", "east", "west").required(),
    city : Joi.string().required(),
    state: Joi.string().required(),
}).required();

const deleteUserValidation = Joi.object({
    _id: Joi.string()
        .length(24)
        .pattern(/^[a-z0-9]+$/)
        .required(),
}).required();

// controller/sensors

const updateLevelByIdValidation = Joi.object({
    _id: Joi.string()
        .length(24)
        .pattern(/^[a-z0-9]+$/)
        .required(),

        dataToUpdate: Joi.object(
            {
                high : Joi.boolean(),
                medium: Joi.boolean(),
                low: Joi.boolean()
            }
        ).required()
}).required();


module.exports = {
    getLevelByIdValidation,
    getLevelByZoneNameValidation,
    loginValidation,
    registerUserValidation,
    deleteSensorValidation,
    addSensorValidation,
    deleteUserValidation,
    updateLevelByIdValidation
};
