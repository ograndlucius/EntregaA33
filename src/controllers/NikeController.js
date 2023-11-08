const NikeService = require('../services/NikeService'); //importação dos serviços

module.exports = {
    buscarTodos: async (req, res)=> {
        let json = {error:'', result:[]};
        
        let nikes = await NikeService.buscarTodos();

        for(let i in nikes){
            json.result.push({
            codigo: nikes[i].codigo, 
            modelo: nikes[i].modelo,
        });

    }
    res.json(json);
 }
}