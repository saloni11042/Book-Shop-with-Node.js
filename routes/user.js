const express = require('express');
const {handleCategories,handleAbout,handleBlog,handleContact} = require('../controllers/user')
const router = express.Router();

router.get('/categories',handleCategories);
router.get('/about',handleAbout);
router.get('/blog',handleBlog);
router.get('/contact',handleContact);

module.exports = router;