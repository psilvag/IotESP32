const dataControllers = require('./data.controllers')

//? Get, Post

const getAllDataValues = (req, res) => {
    dataControllers.findAllDataValues()
        .then((data) => {
            res.status(200).json(data)
            
        })
        .catch((err) => {
            res.status(400).json({message: err.message})
        })
}

const postDataValues = (req, res) => {
    const {tempValue,humValue} = req.body
    dataControllers.createDataValues({tempValue,humValue})
        .then((data) => {
            res.status(201).json(data)
        })
        .catch((err) => {
            res.status(400).json({message: err.message, fields: {
                tempValue: 'String',
                humValue: 'String',
              
            }})
        })
}


module.exports= {
    getAllDataValues,
    postDataValues
}
