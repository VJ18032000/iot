const IoT = require('../model/iot')

const gettemperature = (req, res, next) => {
    IoT.find()
        .then(result => {
            res.send(result)
        })
}

const createtemperature = (req, res, next) => {
    const iot = new IoT({
        hp: req.body.hp,
        pressure:req.body.pressure
    })
    iot.save()
        .then(result => {
            res.json(result)
        })
        .catch(err => {
            res.json({ err })
        })
}

module.exports = {
    createtemperature,
    gettemperature
}