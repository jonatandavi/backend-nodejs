const connection = require('../database/connection');
const crypto = require('crypto');

module.exports = {
    async create(request, response) {
        const { name, email, whatsapp, city, uf } = request.body;

        const id = crypto.randomBytes(4).toString('HEX');

        //Quando chega nesse ponto, ele espera a execução
        await connection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf,
        })

        return response.json({ id });
    },

    async list(request, response) {
        const ongs = await connection('ongs').select('*');

        return response.json(ongs);
    }
};