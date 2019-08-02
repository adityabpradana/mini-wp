const jwt = require('jsonwebtoken')
const secret = process.env.JWT_SECRET_KEY
module.exports = (req, res, next) => {
    console.log(req.headers.token)
    if(req.headers.token){
        let decoded = jwt.verify(req.headers.token, secret)
        if(decoded !== Error){
            req.headers.decoded = decoded
            next()
        } else{
            console.log('Invalid')
            res.status(400).json('Invalid Token')
        }
    }else{
        res.status(400).json({msg: 'No Token'})
    }
}