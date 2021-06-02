const mysql = require('mysql')

const conexao = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'rost',
    password : '',
    database: 'desafiogrupo'
})

module.exports = conexao;