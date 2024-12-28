const mysql = require('mysql2')

let connection = mysql.createPool({
    host:'localhost',
    user:'root',
    password:'',
    database:'BookShop'
})
module.exports = connection.promise()