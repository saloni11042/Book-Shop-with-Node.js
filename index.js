const express = require('express');
const path = require('path')
const db = require('./connection/database')
const multer  = require('multer')

const userRouter = require('./routes/user')
const adminRouter = require('./routes/admin');
const Book = require('./models/admin');

const app = express();


app.set('view engine', 'ejs');
app.set('views',path.resolve('./views'))

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(express.static('public'));

app.use('/user',userRouter)
app.use('/admin',adminRouter)


app.use('/',async (req,res)=>{
    const products = await Book.allProducts();
    res.render('home',{title:"BookShop",books:products})
})

app.use((req,res)=>{
    res.render('404',{title:"Page not Found"})
})

app.listen(3000,()=>{
    console.log('Server started')
})