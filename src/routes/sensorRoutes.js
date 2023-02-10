const controller = require('../controllers/index') 
const sensorRouter = require('express').Router()


sensorRouter.post('/updateLevelById' , controller.updateLevelById)

module.exports = {
    sensorRouter
}