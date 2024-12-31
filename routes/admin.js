const express = require('express');
const {handleAdmin,handleGetAddProduct,handlePostAddProduct,handleAllProduct,handleGetUpdateProduct,handlePostUpdateProduct,handleDeleteProduct} = require('../controllers/admin')

const router = express.Router();

const multer  = require('multer')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './my-uploads')
    },
    filename: function (req, file, cb) {
      cb(null,`${Date.now()}-${file.originalname}`)
    }
  })
  const upload = multer({ storage: storage })


router.get('/',handleAdmin);
router.get('/add-product',handleGetAddProduct);
router.post('/add-product',upload.single('bookImage'),handlePostAddProduct);
router.get('/update-product/:id',handleGetUpdateProduct);
router.post('/update-product',handlePostUpdateProduct);
router.post('/delete-product/:id',handleDeleteProduct);
router.use('/all-products',handleAllProduct);

module.exports = router;