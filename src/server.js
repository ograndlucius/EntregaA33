require('dotenv').config({path:'variaveis.env'});
const express = require('express');
const cors = require('cors'); // permite acesso a outros sites pela API
const bodyParser = require('body-parser'); // modulo capaz de converter o "body" para outros formatos.

const routes = require('./routes');

const server = express();
server.use(cors());
server.use(bodyParser.urlencoded({extended:false}));

server.use('./api', routes) //faz com que todos os enderenços das rotas tenham o prefixo api

server.listen(process.env.PORT, ()=>{
    console.log(`Servidor rodando em: http://localhost:${process.env.PORT}`);
})