const connection = require('../database/connection');
require("dotenv-safe").config();
var jwt = require('jsonwebtoken');

module.exports = {
    async create(request,response){
        const { id } = request.body;

        const ong = await connection('ongs')
            .where('id', id).select('name')
            .first();

        if (!ong){
            return response.status(400).json({ error: "ONG não encontrada" });
        }

        var token = jwt.sign({ id }, process.env.SECRET, {
            expiresIn: 300 //5 min
        })

        return response.json({auth: true, token: token, name: ong.name});
    },

    async logout(request, response){
        response.json({auth: false, token: null})
    }
}