const CustomAPIError = require('../errors/custom-error')
const {StatusCodes} = require('http-status-codes')

class Unauthenicated extends CustomAPIError{
    constructor(message){
        super(message)
        this.statusCode = StatusCodes.UNAUTHORIZED
    }
}

module.exports = Unauthenicated