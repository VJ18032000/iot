const express = require('express')
const router = express.Router()

const  iotController= require('../controller/iot')

router.post('/create',iotController.createtemperature)
router.get('/view',iotController.gettemperature)



module.exports=router