// helper
const { authenticateToken } = require("./helper/authenticateToken");
const { checkAdminById } = require("./helper/checkAdminById");

// admin
const { addSensor } = require("./admin/addSensor");
const { deleteSensor } = require("./admin/deleteSensor");
const { deleteUser } = require("./admin/deleteUser");
const { registerUser } = require("./admin/registerUser");

// user
const { getLevelById } = require("./user/getLevelById");
const { getLevelByZoneName } = require("./user/getLevelByZoneName");
const { login } = require("./user/login");

//sensor
const { updateLevelById } = require("./sensors/updateLevelById");
module.exports = {
    // helper
    authenticateToken,
    checkAdminById,

    // admin
    addSensor,
    deleteSensor,
    deleteUser,
    registerUser,

    // sensor
    updateLevelById,

    // user
    login,
    getLevelById,
    getLevelByZoneName,
};
