const router = require('express').Router()

const dataServices = require('./data.services')


router.route('/')
    .get(dataServices.getAllDataValues)
    .post(dataServices.postDataValues)

module.exports = router
