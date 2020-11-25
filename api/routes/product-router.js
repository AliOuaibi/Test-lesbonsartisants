const express = require('express')

const ProductCtrl = require('../controllers/product-ctrl')

const router = express.Router()

router.post('/addProduct', ProductCtrl.createProduct)
router.put('/product/:id', ProductCtrl.updateProduct)
router.delete('/product/:id', ProductCtrl.deleteProduct)
router.get('/product/:id', ProductCtrl.getProductByName)
router.get('/products', ProductCtrl.getProduct)

module.exports = router