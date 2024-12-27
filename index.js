const express = require('express');
const path = require('path')
const ejs = require(('ejs'))
const db = require('./connection/database')


const bodyParser = require('body-parser');

const app = express();

const adminData = require('./routes/admin')
const shopRoutes = require('./routes/shop')

// db.execute('SELECT * FROM products')
// .then(result=>{
//     console.log(result);
// })
// .catch(err=>{
//     console.log(err)
// })

const errorController = require('./controller/errorController')
const mongoConnect = require('./utils/database')

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

// app.use('/admin',adminData.routes);
app.use('/admin',adminData);
app.use(shopRoutes);

app.set('view engine','ejs');
app.set('views','views');

app.use(errorController.get404Error)

app.listen(3000);