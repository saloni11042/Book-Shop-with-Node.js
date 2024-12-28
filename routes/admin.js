const express = require('express');

const {handleAdmin,handleGetAddProduct,handlePostAddProduct,handleAllProduct} = require('../controllers/admin')
const router = express.Router();

router.get('/',handleAdmin);
router.get('/add-product',handleGetAddProduct);
router.post('/add-product',handlePostAddProduct);
router.use('/all-products',handleAllProduct);

module.exports = router;