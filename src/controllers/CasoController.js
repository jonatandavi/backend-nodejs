const connection = require('../database/connection');

module.exports ={
    async create(request, response) {
        const { title, description, value } = request.body;
        
        //Por boas práticas, tudo que é autorização ou relacionamentos entram no Header
        const ongs_id = request.headers.authorization;

        //Quando chega nesse ponto, ele espera a execução
        const [id] = await connection('casos').insert({
            title, 
            description, 
            value,
            ongs_id,
        })


        return response.json({ id });
    },

    async list(request, response){
        //fazendo paginação de 5 em 5
        const { page = 1} = request.query;

        const [count] = await connection('casos').count();

        const casos = await connection('casos')
            .join('ongs', 'ongs.id', '=', 'casos.ongs_id')
            .limit(5)
            .offset((page - 1) * 5)
            .select([
                'casos.*',
                'ongs.name', 
                'ongs.email', 
                'ongs.whatsapp', 
                'ongs.city', 
                'ongs.uf']);

        //retorna quantidade de dados pelo cabeçalho da requisição
        response.header('X-Total-Count', count['count(*)']);

        return response.json(casos);
    },

    async delete(request, response){
        const {id} = request.params;
        const ongs_id = request.headers.authorization;

        const caso = await connection('casos')
            .where('id', id).select('ongs_id')
            .first();

        if(caso.ongs_id != ongs_id){
            return response.status(401).json({ error: "Operação não permitida"});
        }

        await connection('casos').where('id', id).delete();

        return response.status(204).send();
    }
};