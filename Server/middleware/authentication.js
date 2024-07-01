const { verifyToken } = require("../helper/jwt")

const authentication = async (req, res, next) => {
    try {
        const {authorization} = req.headers

        if(!authorization){
            throw {name:"InvalidToken", message:"Invalid token"}
        }

        const token = authorization.split(" ")[1]

        const scanToken = verifyToken(token)

        req.user = ({
            id: scanToken.id,
            role: scanToken.role
        })

        next()
    } catch (error) {
        next(error)
    }
}

module.exports = authentication