// TODAS AS REGRAS DE BANCO DE DADOS SÃO FEITAS AQUI E SÃO ENXERGADAS NO NIKE CONTROLLER
const db = require('../../db')
module.exports = {
    buscarTodos: ()=>{
        return new Promise((aceito, rejeitado)=>{
            db.query('SELECT * FROM nikes', (error, results) => {
                if(error) {rejeitado(error); return;}
                aceito(results);
            });
        });
    }
};