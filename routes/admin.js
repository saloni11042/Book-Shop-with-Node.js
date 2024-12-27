const express = require('express');

const {handleAdmin} = require('../controllers/admin')
const router = express.Router();

router.get('/',handleAdmin);

module.exports = router;