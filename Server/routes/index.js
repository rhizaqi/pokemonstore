const express = require('express')
const userRouter = require('../routes/userRouter')
const router = express.Router()
const pokemonRouter = require('../routes/pokemonRouter')
const authentication = require('../middleware/authentication')
const orderRouter = require('../routes/orderRouter')
const authorization = require('../middleware/authorization')

router.use("/users", userRouter)
router.use("/pokemon",authentication, authorization, pokemonRouter)
router.use("/order", authentication, orderRouter)

module.exports = router