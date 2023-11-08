const mysql = require('mysql');
const { connect } = require('./src/routes');

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,

});

connection.connect((error)=>{
    if(error) throw error;
    console.log(`Conectado ao Bando de Dados Local:${process.env.DB_NAME}`)
})

module.exports = connection;
