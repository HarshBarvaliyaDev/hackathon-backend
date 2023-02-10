const controller = require('../controllers/index') 
const userRouter = require('express').Router()





userRouter.get('/login' , controller.login)
userRouter.get('/getLevelById' ,controller.authenticateToken , controller.checkAdminById , controller.getLevelById)
userRouter.get('/getLevelByZoneName' ,controller.authenticateToken , controller.checkAdminById , controller.getLevelByZoneName)

module.exports = {
    userRouter
}