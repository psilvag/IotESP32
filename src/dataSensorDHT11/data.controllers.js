const uuid = require('uuid')
const Data = require('../models/data.models')


const findAllDataValues = async () => {
    const data = await Data.findAll()
    return data
}

const createDataValues = async (obj) => {
    const data = await Data.create({
        id: uuid.v4(),
        tempValue: obj.tempValue,
        humValue:obj.humValue
    })
    return data
}

module.exports = {
    findAllDataValues,
    createDataValues
    
}
