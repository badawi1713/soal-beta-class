const express = require('express');
const router = express.Router();
const indexController = require('../controllers/c_cashier');

router.get('/', indexController.getIndexPage);

router.post('/add-order', indexController.postAddOrder);

router.post('/delete-order', indexController.deleteOrder);

router.get('/products', indexController.getProductPage);

router.post('/create-product', indexController.postAddProductItem);

router.post('/edit-product', indexController.editProductItem);

router.post('/delete-product', indexController.deleteProductItem);

module.exports = router;