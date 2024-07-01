const express = require('express')
const OrderController = require('../controllers/orderController')
const router = express.Router()

router.get('/:pokemonId/payment/midtrans/initiate', OrderController.inititateMidTrans)
router.patch('/payment/success', OrderController.donePurchase)

module.exports = router