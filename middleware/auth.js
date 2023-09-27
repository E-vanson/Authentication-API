const {Unauthenicated} = require('../errors')
const jwt = require('jsonwebtoken')

const authenticaWare = async (req, res, next) =>{
    //console.log(req.headers.authorization)

    //to check the headers in the request
    //console.log(req.headers)

    const authHeader = req.headers.authorization
    if(!authHeader || !authHeader.startsWith("Bearer ")){
        throw new Unauthenicated("No token provided ")
    }

    //getting the token from the header
    const token = authHeader.split(' ')[1]
    //console.log(token)

    //verifying if the token is valid
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        const {id, username} = decoded
        req.user = {id, username}
        next()
        //console.log(decoded)
        } catch (error) {
        throw new Unauthenicated('Not authorised to access this route')
    }

   

}

module.exports = authenticaWare