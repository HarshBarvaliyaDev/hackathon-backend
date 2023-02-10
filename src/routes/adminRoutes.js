const controller = require('../controllers/index') 
const adminRouter = require('express').Router()

adminRouter.delete('/deleteSensor' , controller.authenticateToken , controller.checkAdminById , controller.deleteSensor)
adminRouter.delete('/deleteUser' , controller.authenticateToken , controller.checkAdminById , controller.deleteUser)
adminRouter.post('/registerUser' , controller.authenticateToken , controller.checkAdminById , controller.registerUser)
adminRouter.post('/addSensor' , controller.authenticateToken , controller.checkAdminById , controller.addSensor)


module.exports = {

    adminRouter
}