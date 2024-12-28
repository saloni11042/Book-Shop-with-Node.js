const express = require('express');
const path = require('path')
const db = require('./connection/database')

const userRouter = require('./routes/user')
const adminRouter = require('./routes/admin')

const app = express();


app.set('view engine', 'ejs');
app.set('views',path.resolve('./views'))

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(express.static('public'));

app.use('/user',userRouter)
app.use('/admin',adminRouter)

app.use((req,res)=>{
    res.render('home',{title:"BookShop"})
})

app.use((req,res)=>{
    res.render('404',{title:"Page not Found"})
})

app.listen(3000,()=>{
    console.log('Server started')
})